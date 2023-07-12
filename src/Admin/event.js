import React, { useState, useEffect } from "react";
import Navbar from "./nav";
import { initializeApp } from "firebase/app";
import Dropzone from "react-dropzone";
import {
  getStorage,
  ref as reff,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import {
  getDatabase,
  ref,
  onValue,
  push,
  update,
  remove,
} from "firebase/database";
import Footer from "./footer";
import { firebaseConfig } from "../firebase";

const firebaseApp = initializeApp(firebaseConfig, "events");
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

const AdminEvent = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [field5, setField5] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [success, setSuccess] = useState("");
  const [text, setText] = useState("");
  const [styles, setStyles] = useState({});

  useEffect(() => {
    if(localStorage.getItem("authUID")!="6BMmVtW9yhSU4T3CHbkRo9thNv43"&&localStorage.getItem("authUID")!="8kSMYknJfcZm4NKkBEp0pr0YM9M2"&&localStorage.getItem("authUID")!="Bq1ZwulC7XM57m5iQVZS78J9lOK2"&&localStorage.getItem("authUID")!=""&&localStorage.getItem("authUID")!="")
    {
      window.location.replace("/App");
    }
  }, []);

  useEffect(() => {
    const fetchMenuData = async () => {
      const menuRef = ref(database, "Event");
      onValue(menuRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const menuData = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          setMenuItems(menuData);
        }
      });
    };

    fetchMenuData();
  }, []);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleStyleChange = (event) => {
    const { name, value } = event.target;
    setStyles((prevStyles) => ({
      ...prevStyles,
      [name]: value
    }));
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editItemId) {
      const menuRef = ref(database, "Event/"+itemName);
      update(menuRef, {
        itemName,
        description,
        price,
        field1,
        field2,
        field3,
        field4,
        field5,
      });

      // Reset the state variables
      setItemName("");
      setDescription("");
      setPrice("");
      setField1("");
      setField2("");
      setField3("");
      setField4("");
      setField5("");

      setEditItemId(null);
    } else {
      const menuRef = ref(database, "Event/"+itemName);
      const eventRef = ref(database, "Event/List/");
      push(eventRef,itemName);
      const menuItem = {
        itemName,
        description,
        price,
        field1,
        field2,
        field3,
        field4,
        field5,
      };
      update(menuRef, menuItem);

      setItemName("");
      setDescription("");
      setPrice("");
      setField1("");
      setField2("");
      setField3("");
      setField4("");
      setField5("");
    }
  };

  const handleEditItem = (item) => {
    setItemName(item.itemName);
    setDescription(item.description);
    setPrice(item.price);
    setEditItemId(item.id);
    setField1(item.field1);
    setField2(item.field2);
    setField3(item.field3);
    setField4(item.field4);
    setField5(item.field5);
  };

  const handleDeleteItem = (itemId) => {
    const menuRef = ref(database, "Event/"+itemName);
    const eventRef=ref(database,"Event/List/"+itemName.id+"/");
    remove(eventRef)
    remove(menuRef)
      // .then(() => {
      //   setMenuItems((prevMenuItems) =>
      //     prevMenuItems.filter((item) => item.id !== itemId)
      //   );
      // })
      // .catch((error) => {
      //   console.log("Error deleting item:", error);
      // });
  };

  const handleFileUpload = async (files) => {
    try {
      const file = files[0];
      const storageRef = reff(storage, `/Event/${itemName}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      console.log("File uploaded successfully.");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleFileUpload2 = async (filess) => {
    try {
      const file2 = filess[0];
      const storageRef2 = reff(storage, `event2/${file2.name}`);
      await uploadBytes(storageRef2, file2);
      const downloadURL2 = await getDownloadURL(storageRef2);
      console.log("File uploaded successfully.");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  

  return (
    <>
      <Navbar />
      <div style={{
  background: 'linear-gradient(to left, #a492ff, #7237e7)' }}>
        <h1
          style={{
            fontSize: "200%",
            textAlign: "center",
            paddingTop: "2%",
            fontWeight: "bold",
          }}
        >
          Add Events
        </h1>
        <br />

        <form
          onSubmit={handleFormSubmit}
          style={{ textAlign: "center", justifyContent: "center" }}
          className="d-flex flex-wrap"
        >
          <textarea
            className="m-3 p-2 bg-teal-200 border-2 border-zinc-900 hover:border-zinc-950"
            type="text"
            rows={10}
            placeholder="Event Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <br />
          <textarea
            type="text"
            className="m-3 p-2 bg-teal-200 border-2 border-zinc-900"
            placeholder="Description"
            value={description}
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <textarea
            type="text"
            className="m-3 p-2 bg-teal-200 border-2 border-zinc-900"
            placeholder="Price"
            value={price}
            rows={10}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <textarea
            type="text"
            placeholder="Field 1(Italics)"
            className="m-3 p-2 bg-teal-200 border-2 border-zinc-900"
            value={field1}
            rows={10}
            onChange={(e) => setField1(e.target.value)}
          />
          <textarea
            type="text"
            className="m-3 p-2 bg-teal-200 border-2 border-zinc-900"
            placeholder="Field 2(Bold Italic)"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
          />
          <textarea
            type="text"
            className="m-3 p-2 bg-teal-200 border-2 border-zinc-900"
            placeholder="Field 3"
            value={field3}
            onChange={(e) => setField3(e.target.value)}
          />
          <textarea
            type="text"
            className="m-3 p-2 bg-teal-200 border-2 border-zinc-900"
            placeholder="Field 4"
            value={field4}
            onChange={(e) => setField4(e.target.value)}
          />
          <textarea
            type="text"
            className="m-3 p-2 bg-teal-200 border-2 border-zinc-900"
            placeholder="Field 5"
            value={field5}
            onChange={(e) => setField5(e.target.value)}
          />
          <Dropzone onDrop={handleFileUpload} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                style={{ marginBottom: "20px" }}
                className="m-3 p-2 bg-teal-200 border-2 border-zinc-900"
              >
                <input {...getInputProps()} />
                <p>
                  Drag and drop an image file here, or click to select a file.
                </p>
              </div>
            )}
          </Dropzone>
          {success && (
            <div className="fixed top-0 right-0 p-4 m-4 bg-green-500 text-white rounded-lg z-50">
              File uploaded successfully!
            </div>
          )}
          <button
            type="submit"
            className="bg-indigo-950 text-zinc-50 hover:bg-indigo-900 mt-10 rounded-lg border-2 border-zinc-50"
          >
            {editItemId ? "Update Event" : "Add Event"}
          </button>
        </form>

        <div
          className="mt-20"
          style={{
            background: "rebeccapurple",
            paddingLeft: "12%",
            paddingRight: "12%",
            justifyContent: "center",
            textAlign: "justify",
          }}
        >
          <div className="menu-items pb-20 text-zinc-50">
            <h1
              style={{
                color: '#0ccfbc',
                fontSize:'6vh',
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              User's View
            </h1>
            {menuItems.map((item, index) => (
              <div key={index} className="menu-items">
                <h1
                  className=" menu-title  pb-8 pt-2"
                  style={{ textAlign: "center", fontSize: "6vh" }}
                >
                  {item.itemName}
                </h1>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt="Event"
                    style={{ maxWidth: "100%" }}
                  />
                )}
                <p className="event-description">{item.description}</p>
                <p className="event-field">{item.price}</p>

                <p className="event-field">{item.field1}</p>
                
                <p className="event-field">{item.field2}</p>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt="Event2"
                    style={{ maxWidth: "100%" }}
                  />
                )}
                <p className="event-field">{item.field3}</p>
                <p className="event-field">{item.field4}</p>
                <p className="event-field">{item.field5}</p>
                <button
                  className="bg-indigo-950 text-zinc-50 rounded-lg hover:bg-indigo-900 mt-10 border border-zinc-50"
                  onClick={() => handleEditItem(item)}
                >
                  Edit Event
                </button>
                <button
                  className="bg-indigo-950 text-zinc-50 rounded-lg hover:bg-indigo-900 ml-5 mt-10 border border-zinc-50"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Delete Event
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AdminEvent;