import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />

        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
