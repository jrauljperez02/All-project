import React  from "react";
import './style.css'
import homeImage from '../../assets/images/home.png'


const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_CALLBACK_HOST}&scope=user-read-private`;

export default function Home(){

    // const location = useLocation();
    // console.log(location)


    // useEffect(() => {

    // }, []); 


    const handleLoginClick = () => {
        window.location.replace(spotifyUrl);
      };
    
    return (
        // JSX
        <div className="home-container">
            <div className="home-left-child">
                <h3>Bienvenido</h3>
                <h6>Identificate para encontrar tu musica favorita</h6>
                <button onClick={handleLoginClick}>Iniciar sesion</button>
            </div>
            <div className="home-right-child" style={{backgroundImage:  `url(${homeImage})`}}/>
        </div>
    )
}
