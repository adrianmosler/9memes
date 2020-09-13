import memes from "./9memes.jpeg";
import Image from "react-bootstrap/Image";
import React from "react";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import { NavLink } from "react-router-dom";
export const navImagen = () => {
  return (
    <NavbarBrand>
      <Image
        src={memes}
        alt="logo"
        width="90"
        height="90"
        roundedCircle
        variant="top"
      />
    </NavbarBrand>
  );
};
export const navItem = (url, icon, nommbre) => {
  return (
    <NavLink
      className="navItem"
      to={url}
      activeStyle={{
        color: "#2EFE2E",
      }}
      style={{
        color: "#04B404",
      }}
    >
      {icon}
      {nommbre}
    </NavLink>
  );
};
