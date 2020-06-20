import React from 'react';
import {Component} from 'react';
import Footer from './Footer';
import About from './About';

class OtherArea extends Component {
    render() 
    {
        return(
            <div id="otherarea">
                <span className="label">About Me</span>
                <About />
                <span className="label">Hobbies</span>
                <span className="label">Other Stuff</span>
                <span className="label">My Projects</span>
                <Footer />
            </div>
        )
    }
}

export default OtherArea;