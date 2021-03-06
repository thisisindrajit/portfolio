import React from 'react';
import reactlogo from './react.png'
import ghlogo from './github.png'

function gotopage()
{
    window.open("https://github.com/thisisindrajit/portfolio","_blank");
}

const Footer = () => {
        return(
            <div id="footer">
                <span>Created using <img src={reactlogo} alt="react logo"></img>React</span>
                <span>Hosted using <img src={ghlogo} alt="github logo" style={{margin:"0 10px"}}></img>GitHub Pages</span>
                <div id="footer-down">
                <span id="copyright">&copy; Copyright {new Date().getFullYear()} - Indrajit</span>
                <span id="sourcecode" onClick={() => gotopage()}>Check out the source code👨‍💻 on GitHub</span>
                </div>
                <span>Crafted with 💜 by Indrajit</span>
            </div>
        )
}

export default Footer;
