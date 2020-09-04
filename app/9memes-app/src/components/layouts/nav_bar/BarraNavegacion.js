import React from "react";
import "./BarraNavegacion.css";
import { LinkContainer } from "react-router-bootstrap";
import NavBar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavLink from "react-bootstrap/NavLink";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import navImagen from "./HelperBarNav";

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
        <NavbarToggle aria-controls="responsive-navbar-nav" />

        <NavbarCollapse id="responsive-navbar-nav">
          <LinkContainer to="/Home">
            <NavLink className="NavLink">Home</NavLink>
          </LinkContainer>
          <LinkContainer to="/Principal">
            <NavLink className="NavLink">Principal</NavLink>
          </LinkContainer>
          <LinkContainer to="/users">
            <NavLink className="NavLink">Users</NavLink>
          </LinkContainer>
          <LinkContainer to="/Lista">
            <NavLink className="NavLink">Lista</NavLink>
          </LinkContainer>
        </NavbarCollapse>
      </NavBar>
    );
  }
}
export default BarraNavegacion;
