import React from 'react';
import reactlogo from './react.png'
import ghlogo from './gh.svg'

const Footer = () => {
        return(
            <div id="footer">
                <span>Created using <img src={reactlogo} alt="react logo"></img>React</span>
                <span>Hosted using <img src={ghlogo} alt="github logo" style={{margin:"0 10px"}}></img>Github Pages</span>
            </div>
        )
}

export default Footer;
