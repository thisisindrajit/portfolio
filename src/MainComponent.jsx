import React from 'react';
// import bg from "./wallpaper 2.jpg";

const MainComponent = () => {
        return(
            <div className="main">
                {/* <img src={bg} alt="bg"></img> */}
                <code>{"<span id='hello'> Hello! I am "}<u>Indrajit</u>{", a "}<span className="highlight">full stack web developer</span>{" from "} <span id="india">
                    India. </span>{"</span>"}</code>
            </div>
        );
}

export default MainComponent;