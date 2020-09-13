import React from "react";
import "./BarraNavegacion.css";
import NavBar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { navImagen, navItem } from "./HelperNavBar";
import { GiFlame, GiLindenLeaf } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaPoo } from "react-icons/fa";
import { Container } from "react-bootstrap";

class BarraNavegacion extends React.Component {
  render() {
    return (
      <NavBar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        id="nav"
        //fixed="top" Para fijar la barra
      >
        {navImagen()}
        <Container className="justify-content-center">
          {/*  <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav"> */}
          {navItem("/All", "All")}
          {navItem("/FreshNine", <GiLindenLeaf />, "FreshNine")}
          {navItem("/UpcomingNine", <AiOutlineThunderbolt />, "UpcomingNine")}
          {navItem("/PopularNine", <GiFlame />, "PopularNine")}
          {navItem("/ImpopularNine", <FaPoo />, "ImpopularNine")}
          {/* </NavbarCollapse>*/}
        </Container>
      </NavBar>
    );
  }
}
export default BarraNavegacion;
