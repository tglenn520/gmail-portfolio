import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption.js";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice.js";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        COMPOSE
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number="54"
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Stared" number="54" />
      <SidebarOption Icon={AccessTimeIcon} title="Snooze" number="54" />
      <SidebarOption Icon={LabelImportantIcon} title="Inbox" number="54" />
      <SidebarOption Icon={NearMeIcon} title="Stared" number="54" />
      <SidebarOption Icon={NoteIcon} title="Snooze" number="54" />
      <SidebarOption Icon={ExpandMoreIcon} title="Inbox" number="54" />

      <div className="sidebar__footer">
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <VideocamIcon />
        </IconButton>
        <IconButton>
          <PhoneIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
