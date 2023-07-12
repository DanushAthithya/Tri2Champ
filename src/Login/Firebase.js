import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const uid=result.user.uid;
      if(email==="team.tri2champ@gmail.com"||email==="danushathithya.24cs@licet.ac.in")
      {
        window.location.pathname="/AdminPage";
      }
      else{
        window.location.pathname="/UserPage";
      }

      localStorage.setItem("authUID", uid);
    })
    .catch((error) => {
      console.log(error);
    });
};
