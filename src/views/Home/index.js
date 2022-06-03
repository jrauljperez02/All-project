import React  from "react";
import './style.css'
import homeImage from '../../assets/images/home.png'


export default function Home(){
    return (
        // JSX
        <div className="home-container">
            <div className="home-left-child">
                <h3>Bienvenido</h3>
                <h6>Identificate para encontrar tu musica favorita</h6>
                <button>Iniciar sesion</button>
            </div>
            <div className="home-right-child" style={{backgroundImage:  `url(${homeImage})`}}/>
        </div>
    )
}
