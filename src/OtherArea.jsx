import React from 'react';
import Footer from './Footer';
import About from './About';
import Skills from './Skills';
import Extras from './Extras';

const OtherArea = () => {
        return(
            <div id="otherarea">
                <span className="label">About Me</span>
                <About />
                <span className="label">Skills</span>
                <Skills />
                <span className="label">Extras</span>
                <Extras />
                <span className="label">My Projects</span>
                <Footer />
            </div>
        )
    }

export default OtherArea;