import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../firebase";

  const db = getDatabase(app);
  
  function UserProfile({ userId }) {
    const [userProfile, setUserProfile] = useState(null);
  
    useEffect(() => {
      const userRef = ref(db, `users/${userId}`);
      const unsubscribe = onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setUserProfile(userData);
        } else {
          setUserProfile(null);
        }
      });
  
      return () => {
        // Cleanup the event listener
        unsubscribe();
      };
    }, [db, userId]);
  
    if (!userProfile) {
      return <div>Loading...</div>;
    }

  const { firstName, lastName, email, password } = userProfile;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {firstName}</p>
      <p>Email: {lastName}</p>
      <p>Age: {email}</p>
      <p>Address: {password}</p>
    </div>
  );
}

export default UserProfile;
