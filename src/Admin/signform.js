import React, { useState, setState, useEffect } from "react";
import "./signin.scss";
import logo from "../logo1.png";
import Footer from "./footer";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { ref, push, child, update, onValue } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./nav";
import styles from "./signin.module.scss";

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
const database = getDatabase(app);

function UserProfile() {
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);
  const [city, setCity] = useState(null);
  const [weight, setWeight] = useState(null);
  const [state, setState] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function validate() {
    if (!firstName || !/^[A-Za-z -]{3,25}$/.test(firstName.trim())) {
      alert("Invalid First Name");
      return false;
    }
    if (!lastName || !/^[A-Za-z -]{3,25}$/.test(lastName.trim())) {
      alert("Invalid Last Name");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email address");
      return false;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number");
      return false;
    }

    if (!weight || !/^\d{2,3}$/.test(weight)) {
      alert("Invalid Weight");
      return false;
    }

    if (!age || !/^\d{1,3}$/.test(age)) {
      alert("Invalid age");
      return false;
    }

    if (!state || !/^[A-Za-z -]{3,25}$/.test(state.trim())) {
      alert("Invalid state");
      return false;
    }

    if (!city || !/^[A-Za-z -]{3,25}$/.test(city.trim())) {
      alert("Invalid city");
      return false;
    }

    return true;
  }

  useEffect(() => {
    const authUID = localStorage.getItem("authUID");
    if (authUID) {
      const userRef = ref(database, "users/" + authUID);

      onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData != null) {
          setfirstName(userData["FirstName"]);
          setlastName(userData["LastName"]);
          setAge(userData["Age"]);
          setEmail(userData["Email"]);
          setPhone(userData["Phone"]);
          setCity(userData["City"]);
          setState(userData["State"]);
          setWeight(userData["Weight"]);
        }
      });
    }
  }, []);

  useEffect(() => {
    if(localStorage.getItem("authUID")!="6BMmVtW9yhSU4T3CHbkRo9thNv43"&&localStorage.getItem("authUID")!="8kSMYknJfcZm4NKkBEp0pr0YM9M2"&&localStorage.getItem("authUID")!="Bq1ZwulC7XM57m5iQVZS78J9lOK2"&&localStorage.getItem("authUID")!=""&&localStorage.getItem("authUID")!="")
    {
      window.location.replace("/App");
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setfirstName(value);
    }
    if (id === "lastName") {
      setlastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "age") {
      setAge(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
    if (id === "weight") {
      setWeight(value);
    }
    if (id === "city") {
      setCity(value);
    }
    if (id === "state") {
      setState(value);
    }
  };

  const handleSubmit = () => {
    if (validate()) {
      let obj = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Phone: phone,
        Age: age,
        Weight: weight,
        City: city,
        State: state,
      };

      const newUserRef = push(ref(database, "users/"));
      const newUserId = localStorage.getItem("authUID");

      const updates = {};
      updates["/users/" + newUserId] = obj;
      update(ref(database), updates);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
      }, 2500);
    }
  };

  return (
    <>
      {" "}
      <Navbar />{" "}
      <div className={styles["user-registration"]}>
        <div
          style={{ background: "linear-gradient(to left, #a492ff, #7237e7)" }}
        >
          <div className="user-registration">
            <div className="container register">
              <div className="row ">
                <div className="col-md-10 register-right mx-auto d-block">
                  <div className="tab-content" id="myTabContent">
                    <h3 className="register-heading pb-3">User Profile</h3>
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row register-form">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control rounded-lg mt-3"
                              placeholder="First Name "
                              value={firstName}
                              id="firstName"
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="form-group ">
                            <input
                              type="text"
                              className="form-control rounded-lg mt-3"
                              placeholder="Last Name "
                              value={lastName}
                              id="lastName"
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          
                          <div className="form-group">
                            <input
                              type="number"
                              className="form-control rounded-lg mt-3"
                              placeholder="Age "
                              value={age}
                              id="age"
                              onChange={(e) => handleChange(e)}
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control rounded-lg mt-3"
                              placeholder="State"
                              value={state}
                              id="state"
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                            <input
                              type="email"
                              className="form-control rounded-lg mt-3"
                              placeholder="Email "
                              value={email}
                              id="email"
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              minLength="10"
                              maxLength="10"
                              className="form-control rounded-lg mt-3"
                              placeholder="Phone"
                              id="phone"
                              onChange={(e) => handleChange(e)}
                              value={phone}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control rounded-lg mt-3"
                              placeholder="Weight"
                              value={weight}
                              id="weight"
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control rounded-lg mt-3"
                              placeholder="City"
                              value={city}
                              id="city"
                              onChange={(e) => handleChange(e)}
                            />
                          </div>

                          <input
                            type="submit"
                            className="btnRegister bg-emerald-500 "
                            value="Submit"
                            onClick={() => handleSubmit()}
                          />
                          {formSubmitted && (
                            <div
                              style={{ fontSize: "2.5vh" }}
                              className="fixed top-0 bt-10 right-0 p-4 m-4 bg-green-500 text-white rounded-pill z-50"
                            >
                              Profile Updated Successfully!
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
