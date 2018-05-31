import React, {Component} from 'react';

//CSS
import '../assets/css/Carrusel.css';

//Bootstrap
import {Carousel, Image} from "react-bootstrap";

//Images
import slider1 from "../assets/img/banco4.2.jpg";
import slider2 from "../assets/img/banco32.jpg";
import slider3 from "../assets/img/banco6.jpg";

class Carrusel extends Component {
    render() {
        return (
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
        );
    }
}

export default Carrusel;
