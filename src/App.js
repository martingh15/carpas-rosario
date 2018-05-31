import React, {Component} from 'react';
import './App.css';
import {Navbar, Nav, NavItem, Image, Carousel, Row, Col} from "react-bootstrap";

//Images
import logo from "./assets/img/LOGO.png";
import slider1 from "./assets/img/banco4.2.jpg";
import slider2 from "./assets/img/banco32.jpg";
import slider3 from "./assets/img/banco6.jpg";
import ornamentoNegro from "./assets/img/ORNAMENTO_NEGRO.png";
import carpa from "./assets/img/CARPA.jpg";
import livingsOK from "./assets/img/LIVINGS_OK.jpg";
import pisosOK from "./assets/img/PISOS_OK.jpg";
import gazebosOK from "./assets/img/GAZEBOS.jpg";
import galeriaCarpas from "./assets/img/galeriacarpas2.jpg";
import ornamentoBlanco from "./assets/img/ORNAMENTO_BLANCO.png";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            email: '',
            telefono: '',
            texto: '',
        };
    }

    handleChangeNombre(e) {
        this.setState({
            nombre: e.target.value
        });
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleChangeTelefono(e) {
        this.setState({
            telefono: e.target.value
        });
    }

    handleChangeTexto(e) {
        this.setState({
            texto: e.target.value
        });
    }


    render() {
        const {nombre, telefono, email, texto} = this.state;
        console.log('Nombre: ', nombre, '   Telefono: ',telefono, '   Email: ', email,'   Descripcion: ', texto);
        return (
            <div>
                <div style={{backgroundColor: "white"}} className="navegadorFixed">
                    <Navbar inverse collapseOnSelect className="navbar-fixed-top">
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Image src={logo} className="imgLogo"/>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
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


                <div className="margin3Centrado">
                    <div className="carrusel">
                        <Carousel>
                            <Carousel.Item>
                                <Image className="imagenSlider" alt="900x500" src={slider1} responsive/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="imagenSlider" src={slider2} responsive/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="imagenSlider" alt="900x500" src={slider3} responsive/>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>


                    <div className="solucion">
                        <div>
                            <Row>
                                <Col xs={6} sm={6} md={6} lg={6} className="tituloSolucion" s
                                     yle={{textAlign: "center"}}>
                                    <Row>
                                        <p>La solucion <br/>para tus eventos <br/>al aire libre</p>
                                    </Row>
                                    <Row>
                                        <Image style={{width: "12vw"}} src={ornamentoNegro} alt="ornamento negro"/>
                                    </Row>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6} className="listaCaracteristicas"
                                     style={{marginTop: "3.2vw", paddingLeft: "6vw", borderLeft: "0.33vw grey double"}}>
                                    <div className="tituloLista">
                                        <ul>
                                            <li>Grandes dimensiones</li>
                                            <li>Gran capacidad de personas</li>
                                            <li>Alto grado estetico</li>
                                            <li>Adaptable a cualquier lugar</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>


                    <div className="eventos" style={{paddingTop: "100px"}}>
                        <div className="fondoNegro">
                            <Row>
                                <p className="textoEventos">Eventos
                                    sociales y corporativos </p>
                                <p className="categorias">CARPAS | LIVINGS | PISOS | GAZEBOS</p>
                            </Row>
                        </div>
                        <p id="servicios"><br/></p>
                        <div style={{paddingTop: "100px", paddingBottom: "20px"}}>
                            <Row>
                                <p className="nuestrosServicios">Nuestros
                                    Servicios </p>
                                <p style={{textAlign: "center"}}>
                                    <Image className="imgOrnamentoNegroEventos" src={ornamentoNegro}
                                           alt="ornamento-negro"/>
                                </p>
                            </Row>
                        </div>
                    </div>


                    <div className="carpas">
                        <Image style={{width: "100%"}} src={carpa} alt="carpa blanca"/>
                        <div style={{paddingTop: "20px", paddingBottom: "100px"}}>
                            <Row>
                                <Col xs={5} sm={5} md={5} lg={5} className="tituloGrande"
                                     style={{textAlign: "right", paddingRight: "3vw"}}>
                                    <p>CARPAS</p>
                                </Col>
                                <Col xs={7} sm={7} md={7} lg={7} className="tituloDesc"
                                     style={{
                                         paddingTop: "1.75vw",
                                         paddingLeft: "4vw",
                                         borderLeft: "0.33vw grey double"
                                     }}>
                                    <p>Con una gran variedad de dimensiones, nuestras carpas <br/>se adecuan a cualquier
                                        evento y
                                        necesidad. <br/>Creamos ambientes de alta comodidad, estilo y calidez.</p>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="livings">
                        <Image style={{width: "100%"}} src={livingsOK} alt="Livings"/>
                        <div style={{paddingTop: "50px", paddingBottom: "100px"}}>
                            <Row>
                                <Col xs={5} sm={5} md={5} lg={5} className="tituloGrande"
                                     style={{textAlign: "right", paddingRight: "3vw"}}>
                                    <p>LIVINGS</p>
                                </Col>
                                <div xs={7} sm={7} md={7} lg={7} className="tituloDesc"
                                     style={{
                                         paddingTop: "1.75vw",
                                         paddingLeft: "4vw",
                                         borderLeft: "0.33vw grey double"
                                     }}>
                                    <p>Son una opcion ideal para agasajar a tus <br/>invitados en espacios confortables
                                        y bellos <br/>de una
                                        forma acogedora y algo mas informal.</p>
                                </div>
                            </Row>
                        </div>
                    </div>

                    <div className="pisos">
                        <Image style={{width: "100%"}} src={pisosOK} alt="Pisos"/>
                        <div style={{paddingTop: "50px", paddingBottom: "100px"}}>
                            <Row>
                                <Col xs={5} sm={5} md={5} lg={5} className="tituloGrande"
                                     style={{textAlign: "right", paddingRight: "3vw"}}>
                                    <p>PISOS</p>
                                </Col>
                                <div xs={7} sm={7} md={7} lg={7} className="tituloDesc"
                                     style={{
                                         paddingTop: "1.75vw",
                                         paddingLeft: "4vw",
                                         borderLeft: "0.33vw grey double"
                                     }}>
                                    <p>Generan un ambiente diferente, con mayor <br/>comodidad. Aislan la humedad en
                                        caso de mal <br/>tiempo y
                                        evitan el hundimiento en superficies blandas.</p>
                                </div>
                            </Row>
                        </div>
                    </div>

                    <div className="gazebos">
                        <Image style={{width: "100%"}} src={gazebosOK} alt="Pisos"/>
                        <div style={{paddingTop: "50px", paddingBottom: "100px"}}>
                            <Row>
                                <Col xs={5} sm={5} md={5} lg={5} className="tituloGrande"
                                     style={{textAlign: "right", paddingRight: "3vw"}}>
                                    <p>GAZEBOS</p>
                                </Col>
                                <div xs={7} sm={7} md={7} lg={7} className="tituloDesc"
                                     style={{
                                         paddingTop: "1.75vw",
                                         paddingLeft: "4vw",
                                         borderLeft: "0.33vw grey double"
                                     }}>
                                    <p>Dan estilo y visten cualquier tipo de lugar. <br/>Crean ambientes confortables,
                                        luminosos, <br/>agradables
                                        y una estetica visual ideal.</p>
                                </div>
                            </Row>
                        </div>
                    </div>

                    <p id="galeria"><br/></p>
                    <div style={{paddingTop: "20px"}}>
                        <Row>
                            <p style={{
                                textAlign: "center",
                                fontFamily: "NeoSansLight",
                                fontSize: "3.2vw",
                                marginBottom: "0"
                            }}>Galeria
                                de
                                fotos </p>
                            <p style={{textAlign: "center"}}>
                                <Image style={{width: "12vw"}} src={ornamentoNegro}
                                       alt="ornamento-negro"/></p>
                        </Row>
                    </div>
                    <div style={{paddingTop: "3vw", paddingBottom: "7vw"}}>
                        <Row>
                            <Image style={{width: "97%"}} src={galeriaCarpas} alt="Galeria"/>
                        </Row>
                    </div>

                    <div className="fondonegro" style={{paddingTop: "4vw"}}>
                        <div>
                            <h1 style={{
                                color: "white",
                                textAlign: "center",
                                fontFamily: "NeoSansLight",
                                fontSize: "3.7vw"
                            }}>Contactanos! </h1>
                            <form className="formSize">
                                <fieldset>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="nombre" size="25" id="nombre"
                                               placeholder="Nombre y Apellido" onChange={(e) => this.handleChangeNombre(e)}/>
                                        <span className="help-block"></span>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="email" size="25" id="email"
                                               placeholder="E-mail" onChange={(e) => this.handleChangeEmail(e)}/>
                                        <span className="help-block"></span>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="telefono" size="25"
                                               id="telefono" placeholder="Telefono" onChange={(e) => this.handleChangeTelefono(e)}/>
                                        <span className="help-block"></span>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="texto" cols="32" rows="6" id="texto"
                                                  placeholder="Mensaje" onChange={(e) => this.handleChangeTexto(e)}></textarea>
                                        <span className="help-block"></span>
                                    </div>
                                    <div className="form-group">
                                        <p style={{textAlign: "center"}}><input className="btn btn-default"
                                                                                type="submit"
                                                                                value="Enviar" id="btnForm"
                                                                                data-toggle="modal"
                                                                                data-target="#modalConfirma"/></p>
                                    </div>


                                </fieldset>
                            </form>
                            <Row>
                                <p style={{textAlign: "center"}}>
                                    <Image style={{width: "35%"}} src={ornamentoBlanco} alt="ornamento blanco"/>
                                </p>
                            </Row>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default App;
