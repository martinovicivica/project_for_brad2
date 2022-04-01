import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Rig Schedule",
    path: "/rigschedule",
    icon: <AiIcons.AiFillPlusSquare />,
    cName: "nav-text",
  },
  {
    title: "Task Manager",
    path: "/taskmanager",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Notes",
    path: "/notes",
    icon: <FaIcons.FaPen />,
    cName: "nav-text",
  },
  {
    title: "WexproGrid",
    path: "/wexprogrid",
    icon: <FaIcons.FaPen />,
    cName: "nav-text",
  },
];
