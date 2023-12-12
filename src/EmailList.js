import React, { useEffect, useState } from "react";
import "./EmailList.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InboxIcon from "@mui/icons-material/Inbox";
import Section from "./Section";
import EmailRow from "./EmailRow";
import {
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { colRef } from "./firebaseConfig";

function EmailList() {
  const q = query(colRef, orderBy("timestamp", "desc"));

  const [emails, setEmails] = useState([]);
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <CheckBoxOutlineBlankIcon />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsLeft">
          <IconButton>
            <ArrowLeftIcon />
          </IconButton>
          <IconButton>
            <ArrowRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={<InboxIcon />} title="Primary" color="red" selected />
        <Section Icon={<GroupIcon />} title="Social" color="#1A73E8" />
        <Section Icon={<LocalOfferIcon />} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => {
          return (
            <EmailRow
              id={id}
              key={id}
              title={to}
              subject={subject}
              description={message}
              time={new Date(timestamp?.seconds * 1000).toUTCString()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default EmailList;
