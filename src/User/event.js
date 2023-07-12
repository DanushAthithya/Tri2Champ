import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";
import "./event.css";
import Navbar from "./nav";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { app as firebaseApp } from "../firebase";

const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

const UserEvent = () => {
  const event=localStorage.getItem("Event");
  const [menuItem, setMenuItems] = useState([]);
  const [imageUrl1, setImageUrl1] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);
  const [imageUrl3, setImageUrl3] = useState(null);
  const [imageUrl4, setImageUrl4] = useState(null);
  const [imageUrl5, setImageUrl5] = useState(null);
  const [imageUrl6, setImageUrl6] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      const eventRef = ref(database, "Event/"+event);
      onValue(eventRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const menuData = Object.entries(data).map(([key, value]) => ({
            [key]: value,
          }));
          setMenuItems(menuData);
        }
      });
      const imageRef = storageRef(storage, `Event/${event}/img1.jpg`);
      const url= await getDownloadURL(imageRef);
      setImageUrl1(url);

      const imageRef2 = storageRef(storage, `Event/${event}/img2.jpg`);
      const url2= await getDownloadURL(imageRef2);
      setImageUrl2(url2);

      imageRef = storageRef(storage, `Event/${event}/img3.jpg`);
      url= await getDownloadURL(imageRef);
      setImageUrl3(url);

      imageRef = storageRef(storage, `Event/${event}/img4.jpg`);
      url= await getDownloadURL(imageRef);
      setImageUrl4(url);

      imageRef = storageRef(storage, `Event/${event}/img5.jpg`);
      url= await getDownloadURL(imageRef);
      setImageUrl5(url);

      imageRef = storageRef(storage, `Event/${event}/img6.jpg`);
      url= await getDownloadURL(imageRef);
      setImageUrl6(url);
    };

    fetchEventData();
  }, []);
  return (
    <div className="bg-gradient-to-r from-purple-200 to-purple-100">
      <Navbar />
      <div
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          justifyContent: "center",
          textAlign: "justify",
        }}
      >
        <div className="menu-items pb-20">
          {menuItem && (
            <div
              className="menu-items"
              style={{ fontWeight: "500", fontSize: "2.3vh" }}
            >
              <h1
                className="menu-title pt-2"
                style={{
                  textAlign: "center",
                  fontSize: "6vh",
                  fontWeight: "800",
                }}
              >
                {event}
              </h1>
              {imageUrl1 && (
                <div>
                  <img
                    src={imageUrl1}
                    className="hhov mx-auto d-block eventpic"
                    style={{ marginTop: "2%", width: "50%" }}
                  />
                </div>
              )}
              <p className="event-description">{menuItem[0]?.description}</p>
              <p className="event-field" style={{ fontWeight: "800" }}>{menuItem[7]?.price}</p>
              {imageUrl2 && (
                <div>
                  <img
                    src={imageUrl2}
                    className="hhov mx-auto d-block eventpic"
                    style={{ marginTop: "2%", width: "50%" }}
                  />
                </div>
              )}
              {imageUrl3 && (
                <div>
                  <img
                    src={imageUrl3}
                    className="hhov mx-auto d-block eventpic"
                    style={{ marginTop: "2%", width: "50%" }}
                  />
                </div>
              )}
              {imageUrl4 && (
                <div>
                  <img
                    src={imageUrl4}
                    className="hhov mx-auto d-block eventpic"
                    style={{ marginTop: "2%", width: "50%" }}
                  />
                </div>
              )}
              <p className="event-field">{menuItem.field4}</p>
              <p className="event-field">{menuItem.field5}</p>
              {imageUrl5 && (
                <div>
                  <img
                    src={imageUrl5}
                    className="hhov mx-auto d-block eventpic"
                    style={{ marginTop: "2%", width: "50%" }}
                  />
                </div>
              )}
              {imageUrl6 && (
                <div>
                  <img
                    src={imageUrl6}
                    className="hhov mx-auto d-block eventpic"
                    style={{ marginTop: "2%", width: "50%" }}
                  />
                </div>
              )}
              <a href="#" onClick={() => window.location.replace("./register")}>
                <button className="mx-auto d-block bg-emerald-600 event-button text-zinc-950 mt-10 hover:text-zinc-50 border-2 border-indigo-950 hover:border-indigo-50 rounded-xl hover:bg-emerald-800">
                  Register Now!!
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserEvent;
