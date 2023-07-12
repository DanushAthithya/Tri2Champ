import React, { useState, useEffect } from "react";
import "./gallery.css";
import Footer from "./footer";
import logo from "../logo1.png";
import { Helmet } from "react-helmet";
import "@appnest/masonry-layout";
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import {getStorage, ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import Navbar from "./nav";
import { app } from "../firebase";

const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storageRef, 'images');

const AdminGallery = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [images, setImages] = useState([]);

  const handleUpload = async () => {
    const fileInput = document.querySelector('input[type="file"]');
    if (!fileInput) {
      console.error("File not found");
      return;
    }
    const file = fileInput.files[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
    const imageRef = ref(imagesRef, file.name);
    uploadBytes(imageRef, file)
      .then(() => {
        console.log("File Uploaded.");
        setShowDialog(false);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    listAll(imagesRef)
      .then(res => {
        const imagePromises = res.items.map(item => getDownloadURL(item));
        Promise.all(imagePromises).then(urls => {
          setImages(urls);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    if(localStorage.getItem("authUID")!="6BMmVtW9yhSU4T3CHbkRo9thNv43"&&localStorage.getItem("authUID")!="8kSMYknJfcZm4NKkBEp0pr0YM9M2"&&localStorage.getItem("authUID")!="Bq1ZwulC7XM57m5iQVZS78J9lOK2"&&localStorage.getItem("authUID")!=""&&localStorage.getItem("authUID")!="")
    {
      window.location.replace("/App");
    }
  }, []);
  

  return (
    <>
      <Helmet>
        <title>Tri2champ</title>
        <link rel="icon" type="image/png" href="logo.png" />
      </Helmet>
      <Navbar/>
      <masonry-layout cols="3" gap="30" style={{ padding: "4%" }}>
        
        {images.map(url => (
        <div key={url}>
          <img src={url} alt="uploaded" className="hhov"/>
        </div>
      ))}
        
      </masonry-layout>
      <div className="flex items-center flex-column justify-center pb-10">
        <button
          className="btn bg-gradient-to-b hover:from-emerald-800  hover:to-emerald-600 from-teal-800 rounded-lg to-teal-600 text-zinc-100 hover:text-zinc-100 hover:border-2 hover:border-zinc-900
        text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowDialog(true)}
        >
          Add Image
        </button>
        {showDialog && (
          <div className="bg-gradient-to-b text-white from-teal-800 to-teal-600 p-4 border-2 border-zinc-900 rounded-lg   z-10 m-4 fluid">
            <p className="mx-auto d-block pb-3">Add Image</p>
            <input type="file" />
            <div className="flex flex-row">
              <button
                className="rounded-lg w-20 bg-blue-600  hover:bg-blue-500 hover:text-zinc-900"
                onClick={handleUpload}
              >
                Upload
              </button>
              <button
                className="rounded-lg w-20 h-5 mx-auto bg-red-600  hover:bg-red-500 hover:text-zinc-900"
                onClick={() => setShowDialog(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {uploadSuccess && (
          <div className="fixed top-0 right-0 p-4 m-4 bg-green-500 text-white rounded-lg z-50">
            File uploaded successfully!
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminGallery;
