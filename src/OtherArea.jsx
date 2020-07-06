import React from 'react';
import Footer from './Footer';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Extras from './Extras';
import Favourites from './Favourites';

const OtherArea = () => {
        return(
            <div id="otherarea">
                <span className="label">About Me</span>
                <About />
                <span className="label">Skills</span>
                <Skills />
                <span className="label">Projects</span>
                <Projects />
                <span className="label">Extras</span>
                <Extras />
                <span className="label">Favourites</span>
                <Favourites />
                <Footer />
            </div>
        )
    }

export default OtherArea;