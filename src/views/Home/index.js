import React  from "react";
import './style.css'


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
            <div className="home-right-child" style={{backgroundImage:  `url(https://images.unsplash.com/photo-1594434533760-02e0f3faaa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1938&q=80)`}}/>
        </div>
    )
}
