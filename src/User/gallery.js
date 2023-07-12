import React, { useEffect, useState } from "react";
import "./gallery.css";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import NavbarM from "./nav";
import { app } from "../firebase";

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
      <div className="masonry-container bg-gradient-to-r from-purple-300 to-purple-300">
        {images.map(url => (
          <div key={url} className="masonry-item">
            <img src={url} alt="uploaded" className="hhov mx-auto d-block" />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default HomeGallery;
