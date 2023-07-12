import React, { useState, setState, useEffect } from "react";
import "./signin2.scss";
import "./gallery.css";
import Footer from "./footer";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { ref, push, child, update, onValue } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./nav";
import { app } from "../firebase";

const database = getDatabase(app);

function Eventreg() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);
  const [emergencyContact, setEmergencyContact] = useState(null);
  const [country, setCountry] = useState(null);
  const [clubName, setClubName] = useState(null);
  const [weight, setWeight] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [file, setFile] = useState(null);
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

    if (
      !/^(?:(?:(?:0[1-9]|1\d|2[0-8])\/(?:0[1-9]|1[0-2]))|(?:(?:29|30|31)\/(?:0[13578]|1[02]))|(?:(?:29|30)\/(?:0[1,3-9]|1[0-2])))\/(?:19|20)\d{2}$/.test(
        dob
      )
    ) {
      alert("Invalid Date of Birth");
      return false;
    }

    if (!/^\d{10}$/.test(emergencyContact)) {
      alert("Invalid emergency contact number");
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

    if (!country || !/^[A-Za-z -]{3,25}$/.test(country.trim())) {
      alert("Invalid country");
      return false;
    }

    if (!clubName || !/^[A-Za-z -]{3,25}$/.test(clubName.trim())) {
      alert("Invalid club name");
      return false;
    }

    return true;
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "dob") {
      setDob(value);
    }
    if (id === "gender") {
      setGender(value);
    }
    if (id === "age") {
      setAge(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
    if (id === "emergencyContact") {
      setEmergencyContact(value);
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
    if (id === "country") {
      setCountry(value);
    }
    if (id === "clubName") {
      setClubName(value);
    }
  };

  const handleSubmit = () => {
    if (validate()) {
      let obj = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        DOB: dob,
        Gender: gender,
        Age: age,
        Phone: phone,
        EmergencyContact: emergencyContact,
        Weight: weight,
        City: city,
        State: state,
        Country: country,
        ClubName: clubName,
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

  useEffect(() => {
    const authUID = localStorage.getItem("authUID");
    if (authUID) {
      const userRef = ref(database, "users/" + authUID);

      onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData != null) {
          setFirstName(userData["FirstName"]);
          setLastName(userData["LastName"]);
          setAge(userData["Age"]);
          setEmail(userData["Email"]);
          setPhone(userData["Phone"]);
          setCity(userData["City"]);
          setState(userData["State"]);
          setWeight(userData["Weight"]);
          setCountry(userData["Country"]);
          setClubName(userData["ClubName"]);
          setEmergencyContact(userData["EmergencyContact"]);
          setDob(userData["DOB"]);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("authUID") == "") {
      window.location.replace("/App");
    }
  }, []);

  const redirect = () => {
    window.location.href = "/payment";
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <div>
      <Navbar />
      <div style={{ background: "linear-gradient(to left, #a492ff, #7237e7)" }}>
        <div className="user-registration">
          <div className="container register">
            <div className="row ">
              <div className="col-md-10 register-right1 mx-auto d-block">
                <div className="tab-content" id="myTabContent">
                  <h3 className="register-heading pb-3">
                    Update your details to register
                  </h3>
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
                            placeholder="First Name"
                            value={firstName}
                            id="firstName"
                            onChange={(e) => handleChange(e)}
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
                            type="email"
                            className="form-control rounded-lg mt-3"
                            placeholder="Email"
                            value={email}
                            id="email"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control rounded-lg mt-3"
                            placeholder="Date of Birth(DD/MM/YYYY)"
                            value={dob}
                            id="dob"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control rounded-lg mt-3"
                            placeholder="Age"
                            value={age}
                            id="age"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control rounded-lg mt-3"
                            placeholder="Phone"
                            minLength="10"
                            maxLength="10"
                            value={phone}
                            id="phone"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control rounded-lg mt-3"
                            placeholder="Last Name"
                            value={lastName}
                            id="lastName"
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
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control rounded-lg mt-3"
                            placeholder="Country"
                            value={country}
                            id="country"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control rounded-lg mt-3"
                            placeholder="Club Name"
                            value={clubName}
                            id="clubName"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control rounded-lg mt-3"
                            placeholder="Emergency Contact"
                            value={emergencyContact}
                            id="emergencyContact"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                        <input
                          type="submit"
                          className="btnRegister bg-emerald-500 "
                          value="Register"
                          onClick={handleSubmit}
                        />
                         {formSubmitted && (
                            <div
                              style={{ fontSize: "2.5vh" }}
                              className="fixed top-0 bt-10 right-0 p-4 m-4 bg-green-500 text-white rounded-pill z-50"
                            >
                              Details Updated!
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
  );
}

export default Eventreg;
