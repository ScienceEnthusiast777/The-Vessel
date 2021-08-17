import React, { FC } from "react";
import { Link } from "react-router-dom";

type User = {
  username: string;
  password?: string;
};

interface INavProps {
  user: User;
  setUser: (user: User | null) => void;
}

const NavBar: FC<INavProps> = (props) => {
  const logouthandler = () => {
    // need to add auth helper functions
  };
  return (<></>)
};

export default NavBar;
