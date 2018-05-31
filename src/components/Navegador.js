import React, {Component} from 'react';
import '../assets/css/Navegador.css';
import {Navbar, Nav, NavItem, Button, NavDropdown, MenuItem, Image} from "react-bootstrap";

//Images
import logo from "../assets/img/LOGO.png";

class Navegador extends Component {
    render() {
        return (
            <div style={{backgroundColor:"white"}} className="navegadorFixed">
                <Navbar inverse collapseOnSelect className="navbar-fixed-top">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Image src={logo} className="imgLogo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem className="itemMenu">
                                <a href="#inicio">Inicio</a>
                            </NavItem>
                            <NavItem className="itemMenu">
                                <a href="#servicios">Servicios</a>
                            </NavItem>
                            <NavItem className="itemMenu">
                                <a href="#galeria">Galeria</a>
                            </NavItem>
                            <NavItem className="itemMenu">
                                <a href="#contacto">Contacto</a>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navegador;
