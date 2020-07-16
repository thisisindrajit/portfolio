import React from 'react';
import SocialCard from './SocialCard';

const Connect = () => {
    return(
    <div id="connect">
        <div id="connecttitle">Connect with me</div>
        <div id="connectcard">
                <div id="connectcardholder">
                <SocialCard src="./instagram.png" url="https://www.instagram.com/thisisindrajit/"/>
                <SocialCard src="./twitter.png" url="https://twitter.com/indrajitmusic"/>
                <SocialCard src="./github.png" url="https://github.com/thisisindrajit"/>
                </div>

                <p id="email">
                <span style={{color:"#76D7C4",marginBottom:"5px"}}>Email</span>
                indrajitvijayakumar@gmail.com
                </p>
        </div>
    </div>);
}

export default Connect;