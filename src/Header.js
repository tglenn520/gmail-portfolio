import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WidgetsIcon from "@mui/icons-material/Widgets";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebaseConfig";
import { signOut } from "firebase/auth";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        alert(error.message);
      });
    dispatch(logout());
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
          className="logo"
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon />
      </div>
      <div className="header__right">
        <IconButton>
          <WidgetsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <Avatar onClick={signout} src={user?.photoUrl}>
            T
          </Avatar>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
