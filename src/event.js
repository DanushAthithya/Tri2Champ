import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import "./event.css";
import NavbarM from "./nav2";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Login from "./Login/LoginApp";
import {app as firebaseApp} from "./firebase";

const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);
const imagesRef = storageRef(storage, "event");

const HomeEvent = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const menuRef = ref(database, "Menu");
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const menuData = Object.values(data);
        setMenuItems(menuData);
      }
    });
  }, []);

  useEffect(() => {
    listAll(imagesRef)
      .then((res) => {
        const imagePromises = res.items.map((item) => getDownloadURL(item));
        Promise.all(imagePromises)
          .then((urls) => {
            setImages(urls);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const removeNewlines = (text) => {
    return text.replace(/\n/g, " ");
  };
  const currentPath = window.location.pathname;
  if (currentPath === "/Login") {
    return <Login />;
  } else {
    return (
      <div className="bg-gradient-to-r from-purple-200 to-purple-100">
        <NavbarM />
        <div
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
            justifyContent: "center",
            textAlign: "justify",
          }}
        >
          <div className="menu-items pb-20">
            {menuItems.map((item, index) => {
              const imageUrl = images[images.length - 1];
              const imageUrl1 = images[images.length - 2];
              const imageUrl2 = images[images.length - 3];
              const imageUrl3 = images[images.length - 4];
              const imageUrl4 = images[images.length - 5];
              const imageUrl5 = images[images.length - 6];
              return (
                <div
                  key={index}
                  className="menu-items"
                  style={{ fontWeight: "500", fontSize: "2.3vh" }}
                >
                  <h1
                    className="menu-title  pt-2"
                    style={{
                      textAlign: "center",
                      fontSize: "6vh",
                      fontWeight: "800",
                    }}
                  >
                    {item.itemName}
                  </h1>
                  {imageUrl && (
                    <div>
                      <img
                        src={imageUrl}
                        className="hhov  mx-auto d-block eventpic"
                        style={{ marginTop: "2%", width: "90%" }}
                      />
                    </div>
                  )}
                  <p className="event-description">{item.description}</p>
                  <p className="event-field" style={{ fontWeight: "800" }}>
                    {item.price}
                  </p>
                  {imageUrl1 && (
                    <div>
                      <img
                        src={imageUrl1}
                        className="hhov  mx-auto d-block eventpic"
                      />
                    </div>
                  )}
                  <p
                    className="event-field"
                    style={{ fontStyle: "", fontWeight: "unset" }}
                  >
                    {item.field1}
                  </p>
                  {imageUrl2 && (
                    <div>
                      <img
                        src={imageUrl2}
                        className="hhov  mx-auto d-block eventpic"
                      />
                    </div>
                  )}
                  <p className="event-field" style={{ fontWeight: "800" }}>
                    <i>{item.field2}</i>
                  </p>
                  {imageUrl3 && (
                    <div>
                      <img
                        src={imageUrl3}
                        className="hhov  mx-auto d-block eventpic"
                      />
                    </div>
                  )}
                  <p className="event-field">{item.field3}</p>
                  {imageUrl4 && (
                    <div>
                      <img
                        src={imageUrl4}
                        className="hhov  mx-auto d-block eventpic"
                      />
                    </div>
                  )}
                  <p className="event-field">{item.field4}</p>
                  <p className="event-field">{item.field5}</p>
                  {imageUrl5 && (
                    <div>
                      <img
                        src={imageUrl5}
                        className="hhov  mx-auto d-block eventpic"
                      />
                    </div>
                  )}
                </div>
              );
            })}
            <a href="/Login">
              <button
                style={{ fontSize: "100%" }}
                className="p-4 bg-gradient-to-r hover:border-zinc-100 from-zinc-950 to-indigo-950 hover:bg-gradient-to-r hover:to-indigo-900 text-zinc-50 rounded-pill hover:from-zinc-800 "
              >
                Sign in to register
              </button>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
};

export default HomeEvent;
