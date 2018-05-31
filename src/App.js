import React, {Component} from 'react';
import './App.css';
import {Navbar, Nav, NavItem, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

//Componentes
import Navegador from "./components/Navegador";
import Carrusel from "./components/Carrusel";

class App extends Component {
    render() {
        return (
            <div>
                <Navegador/>
                <Carrusel/>
            </div>
        );
    }
}

export default App;
