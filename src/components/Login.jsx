import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../services/firebase";

export default function Login() {
  const [value, setValue] = useState();
  const signIn = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log(credential)
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

  };
    useEffect(() => {
      if (localStorage.getItem("email")) {
        setValue(localStorage.getItem("email"));
      }
    }, [localStorage.getItem("email")]);
  return <div onClick={signIn}>login</div>;
}
