import logo from "./9memes.jpeg";
import React from "react";
import "./BarraNavegacion.css";
import {
  Navbar,
  Image,
  NavbarToggle,
  NavbarCollapse,
  Container,
  NavDropdown,
  NavbarBrand,
} from "react-bootstrap";
import { GiFlame, GiLindenLeaf } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { FaPoo } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Nav_bar() {
  return (
    <Navbar collapseOnSelect expand="lg" id="nav">
      <Sector_img logo={logo} />

      <Container className="justify-content-center">
        <ItemNav url="/Home" icons="" name="Home" />
        <ItemNav url="/MostPopular" icons={<GiFlame />} name="Most Popular" />
        <ItemNav url="/Impopular" icons={<FaPoo />} name="Impopular" />

        <NavDropdown title="Category" id="collasible-nav-dropdown" as={NavLink}>
          <ItemNav url="/Funny" icons={<AiOutlineThunderbolt />} name="Funny" />
          <ItemNav
            url="/Animals"
            icons={<AiOutlineThunderbolt />}
            name="Animals"
          />
          <ItemNav
            url="/Argentina"
            icons={<AiOutlineThunderbolt />}
            name="Argentina"
          />
        </NavDropdown>
        <ItemNav url="/Login" icons={<AiOutlineLogin />} name="Login" />
      </Container>
    </Navbar>
  );
}

function ItemNav(props) {
  return (
    <NavLink
      className="navItem"
      to={props.url}
      activeStyle={{
        color: "#2EFE2E",
      }}
      style={{
        color: "#04B404",
      }}
    >
      {props.icons}
      {props.name}
    </NavLink>
  );
}

function Sector_img(props) {
  return (
    <NavbarBrand>
      <Image
        src={props.logo}
        alt="logo"
        width="90"
        height="90"
        roundedCircle
        variant="top"
      />
    </NavbarBrand>
  );
}
export default Nav_bar;
