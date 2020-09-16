import React from "react";
import "./BarraNavegacion.css";
import NavBar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { navImagen, navItem } from "./HelperNavBar";
import { GiFlame, GiLindenLeaf } from "react-icons/gi";
import { AiFillCaretRight, AiOutlineThunderbolt } from "react-icons/ai";
import { FaHandPointRight, FaPoo } from "react-icons/fa";
import { Container, NavDropdown } from "react-bootstrap";
import { Router, Link, NavLink } from "react-router-dom";
import Principal from "./.././../pages/Principal";
// /components/pages/Principal
import { Switch, Route, useLocation } from "react-router-dom";
/* 
class BarraNavegacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "Nombre usuario",
      urlIcon: "https://i.ytimg.com/vi/jKBtW7BrnqM/hqdefault.jpg",
      UsuarioNotLogin: true,
    };
  }
  // */

export default function BarraNavegacion(props) {
  // /*  render() { */
  // const [_, pushLocation] = useLocation();
  /*   const { user } = this.props.user; */
  const login = false;
  return (
    <NavBar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      id="nav"
      //fixed="top" Para fijar la barra
    >
      {/* 
pushLocation(`/search/${keyword}/${rating}`) */}
      {navImagen()}
      <Container className="justify-content-center">
        {/*  <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav"> */}
        {navItem("/All", "All")}
        {navItem("/FreshNine", <GiLindenLeaf />, "FreshNine")}
        <NavDropdown bg="light" title="Category" id="collasible-nav-dropdown">
          {navItem("/Funny", <AiOutlineThunderbolt />, "Funny")}
          {navItem("/Animals", <AiOutlineThunderbolt />, "Animals")}
          {navItem("/Argentina", <AiOutlineThunderbolt />, "Argentina")}
        </NavDropdown>

        {navItem("/MostPopular", <GiFlame />, "MostPopular")}
        {navItem("/ImpopularNine", <FaPoo />, "ImpopularNine")}
        {/* </NavbarCollapse>*/}
        {
          <button
            class="btn btn-sm btn-outline-secondary"
            type="button"
            onClick={() => {
              console.log("new meme");
              console.log("otromeme");

              // navItem("/All", "All");
              // <NavLink></NavLink>;
              // pushLocation("/All");
            }}
          >
            Crea tu meme
          </button>
        }
        {
          <>
            {!login && (
              <button
                class="btn btn-outline-success"
                // className="btnLogin"
                type="button"
                onClick={() => {
                  console.log("Redirigir a Login");
                  /* Link("/All"); */
                }}
              >
                Iniciar Sesion
              </button>
            )}
            {login && (
              <>
                <a class="navbar-brand" href="#">
                  Nombre usuario o imagen
                </a>
                <a class="navbar-brand" href="#">
                  <img
                    src="https://utta2010.files.wordpress.com/2012/08/3-chiflados.jpg?w=640"
                    width="30"
                    roundedCircle="true"
                    alt=""
                    loading="lazy"
                  ></img>
                </a>
              </>
            )}
          </>
        }
      </Container>
    </NavBar>
  );
}
/* } */
// export default BarraNavegacion;
