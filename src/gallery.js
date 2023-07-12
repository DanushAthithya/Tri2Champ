import React, { useEffect, useState } from "react";
import "./gallery.css";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import NavbarM from "./nav2";

const firebaseConfig = {
  apiKey: "AIzaSyB_mIscj9j6Dqyf3ujlqfgbP1JakEygD68",
  authDomain: "tri2champ.firebaseapp.com",
  databaseURL: "https://tri2champ-default-rtdb.firebaseio.com",
  projectId: "tri2champ",
  storageBucket: "tri2champ.appspot.com",
  messagingSenderId: "318844875234",
  appId: "1:318844875234:web:c76a1750ee286f168e89bb",
  measurementId: "G-VV8HWE99L3",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storageRef, 'images');

const HomeGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    listAll(imagesRef)
      .then(res => {
        const imagePromises = res.items.map(item => getDownloadURL(item));
        Promise.all(imagePromises)
          .then(urls => {
            setImages(urls);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("authUID") === "") {
      window.location.replace("/App");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Tri2champ</title>
        <link rel="icon" type="image/png" href="logo.png" />
      </Helmet>
      <NavbarM />
      <div className="masonry-container">
        {images.map(url => (
          <div key={url} className="masonry-item">
            <img src={url} alt="uploaded" className="hhov" />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default HomeGallery;
