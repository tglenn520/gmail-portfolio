import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import EmailList from "./EmailList";
import Mail from "./Mail";
import SendMail from "./SendMail";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
        // user is logged out
      }
    });
  }, []);
  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
