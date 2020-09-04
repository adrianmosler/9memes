import memes from "./9memes3.jpeg";
import Image from "react-bootstrap/Image";
import React from "react";
import NavbarBrand from "react-bootstrap/NavbarBrand";
const navImagen = () => {
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
export default navImagen;
