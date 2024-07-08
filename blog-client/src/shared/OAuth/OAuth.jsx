import { Button } from "flowbite-react";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  // app exported from firebase config
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   google auth function
  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    // this will ask every time to select a google account
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultFromGoogleAuth = await signInWithPopup(auth, provider);
      const res = await fetch(
        "https://blog-server-one-theta.vercel.app/api/auth/google",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: resultFromGoogleAuth.user.displayName,
            email: resultFromGoogleAuth.user.email,
            googlePhotoUrl: resultFromGoogleAuth.user.photoURL,
          }),
        }
      );
      if (!res.ok) {
        throw new Error(
          `Failed to authenticate with Google. Status: ${res.status}`
        );
      }
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleAuth}
    >
      <FaGoogle className="w-6 h-6 mr-2" />
      <span>Continue With Google</span>
    </Button>
  );
};

export default OAuth;
