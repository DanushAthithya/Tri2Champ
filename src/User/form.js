import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function validate() {
    if (name === "") {
      alert("Name is Empty");
      return false;
    } else if (!/^[A-Za-z -]{3,25}$/.test(name)) {
      alert("Invalid Name");
      return false;
    }

    if (phone === "") {
      alert("Phone number is Empty");
      return false;
    } else if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number");
      return false;
    }

    if (email === "") {
      alert("Email is Empty");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email address");
      return false;
    }
    return true;
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lrvr1jb', 'template_mq28fsx', form.current, 'PAOrqHdpZ-s8-o0BL')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      sendEmail(event);
      alert("Message Sent Successfully")
    }
  };

  

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="frm bg-emerald-100 pb-10"
        ref={form}
        id="form"
      >
        <p style={{ }} className="col-4 fnt col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 pb-4 pt-10  d-block"><b>Contact Us</b></p>

        <div style={{  }}>
          <p className="help">
            <b>
              We will talk about your situation <br />
              and see how we can help
            </b>
          </p>

          <label className="pb-2" htmlFor="name">Name:</label>
          <br />

          <input
            className="rounded bg-zinc-200 border-b-4 border-cyan-400 hover:border-2 pt-2 border-cyan-600 bg-gradient-to-b from-zinc-300 to-teal-500   "
            style={{
              color: "black",
              paddingLeft: "1.5%",
              paddingRight: "1.5%",
              paddingTop: "1%",
              paddingBottom: "1%",
              backgroundColor:""
            }}
            name="from_name"
            type="text"
            id="from_name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label className="pb-2 pt-2" htmlFor="email">Email:</label>
          <br />
          <input
            className="rounded bg-zinc-200 border-b-4 border-cyan-400 hover:border-2 pt-2 border-cyan-600 bg-gradient-to-b from-zinc-300 to-teal-500"
            type="text"
            style={{
              color: "black",
              paddingLeft: "1.5%",
              paddingRight: "1.5%",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label  htmlFor="phone" className="pb-2 pt-1" >Phone:</label>
          <br />
          <input
            className="rounded bg-zinc-200 border-b-4 border-cyan-400 hover:border-2 pt-2 border-cyan-600 bg-gradient-to-b from-zinc-300 to-teal-500"
            type="tel"
            style={{
              color: "black",
              paddingLeft: "1.5%",
              paddingRight: "1.5%",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
            name="phone"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div>
          <label  htmlFor="message" className="pb-2 pt-2">Message:</label>
          <br />
          <textarea
            className="rounded bg-zinc-200 border-b-4 border-cyan-400 hover:border-2 pt-2 border-cyan-600 bg-gradient-to-b from-zinc-300 to-teal-500"
            id="message"
            name="message"
            style={{
              color: "black",
              paddingLeft: "1.5%",
              paddingRight: "1.5%",
              paddingTop: "1%",
              paddingBottom: "%",
            }}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <br />
        <button
        style={{ fontSize: "2vh" }}
          type="submit"
          className="rounded-lg bot ring-2 ring-blue-500 bg-gradient-to-b from-emerald-400 to-zinc-600 hover:from-emerald-500 hover:to-zinc-700 hover:text-zinc-100"
        >
          Submit
        </button>
      </form>
    </>
  );
}


export default Form;
