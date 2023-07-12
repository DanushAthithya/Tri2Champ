import React from "react";
import "./LoginApp.css";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithGoogle } from "./Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase";
import { useState } from "react";
import logo from "./logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import NavbarL from "./navbar";
import FooterL from "./footerl";
import Tilt from "react-parallax-tilt";

function Login() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [successs, setSuccesss] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const SignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("authUID", userCredential.user.uid);

        if (
          email === "team.tri2champ@gmail.com" ||
          email === "danushathithya.24cs@licet.ac.in" ||
          email === "antonyjudeshaman.24cs@licet.ac.in"
        ) {
          setSuccesss(true);
          setTimeout(() => setSuccesss(false), 1500);
          setTimeout(() => (window.location.pathname = "/AdminPage"), 1500);
        } else {
          setSuccesss(true);
          setTimeout(() => setSuccesss(false), 1500);
          setTimeout(() => (window.location.pathname = "/UserPage"), 1500);
        }
      })

      .catch((error) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const email = userCredential.user.email;
            console.log(email);
            localStorage.setItem("authUID", userCredential.user.uid);
            if (
              email === "team.tri2champ@gmail.com" ||
              email === "danushathithya.24cs@licet.ac.in" ||
              email === "antonyjudeshaman.24cs@licet.ac.in"
            ) {
              setSuccess(true);
              setTimeout(() => setSuccess(false), 1500);
              setTimeout(() => (window.location.pathname = "/AdminPage"), 1500);
            } else {
              setSuccess(true);
              setTimeout(() => setSuccess(false), 1500);
              setTimeout(() => (window.location.pathname = "/UserPage"), 1500);
            }
          })
          .catch((error) => {
            window.alert("Invalid Email / Password");
          });
      });
  };
  const currPath = window.location.pathname;
  return (
    <>
      <NavbarL />
      <div className="login-container ">
        <div className="LoginApp pt-5 pb-5 ">
          <div className=" bg-gradient-to-tr  border-2 border-indigo-100 to-indigo-950 from-zinc-950 pb-4 Log_box mx-auto d-block rounded-xl">
            <br />

            <div id="logo" className="mx-auto d-block ">
              <a href="/">
                {" "}
                <Tilt>
                  <img src={logo} className="mx-auto d-block "/>
                </Tilt>
              </a>
            </div>
            <br />
            <div id="head" className=""></div>
            <input
              className="in1 mb-4 mt-4 rounded-xl text-zinc-950 border-b-4 border-cyan-400 hover:border-2 pt-2 border-cyan-600 bg-gradient-to-b from-zinc-200 to-teal-200 rounded-xl p-2 "
              type="text"
              name="username"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <input
              className="in2 mb-5 text-zinc-950 border-b-4 border-cyan-400 hover:border-2 pt-2 border-cyan-600 bg-gradient-to-b from-zinc-200 to-teal-200 rounded-xl p-2 "
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <button
              className="bg-orange-400 text-zinc-50  rounded-lg  sig"
              onClick={SignIn}
            >
              Sign Up / Log In
            </button>
            <br />
            <br />
            <button
              class="login-with-google-btn text-zinc-950 hover:text-zinc-950 border-2 border-cyan-400 hover:border-2 pt-2 border-cyan-600 bg-gradient-to-b from-indigo-300 to-zinc-200  hover:bg-gradient-to-b hover:from-indigo-400 hover:to-zinc-300 rounded-xl p-2 "
              onClick={signInWithGoogle}
            >
              <FaGoogle size={32} className="pr-2 " color="blue" />
              Sign in with Google
            </button>
            <br />
            <br />
            <a
              className="button_Phn btn-success text-zinc-950 hover:text-zinc-950 border-2 border-cyan-400 hover:border-2  border-cyan-600 bg-gradient-to-b from-indigo-300 to-zinc-200  hover:bg-gradient-to-b hover:from-indigo-400 hover:to-zinc-300 rounded-xl p-3  mb-8"
              href="/PhoneVer"
            >
              <FaPhoneAlt size={22} className="text-blue-600" color="blue" />
              Sign In with Phone
            </a>

            {successs && (
              <div className="fixed top-0 right-0 p-4 m-4 bg-green-500 text-white rounded-lg z-50">
                Log In successful !!
              </div>
            )}
            {success && (
              <div className="fixed top-0 right-0 p-4 m-4 bg-green-500 text-white rounded-lg z-50">
                Sign Up successful !!
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterL />
    </>
  );
}
export default Login;
