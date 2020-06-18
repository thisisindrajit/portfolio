import React from 'react';
import {Component} from 'react';
import reactlogo from './react.png'
import ghlogo from './gh.svg'

class Footer extends Component {
    render()
    {
        return(
            <div id="footer">
                <span>Created using <img src={reactlogo} alt="react logo"></img><b>React</b></span>
                <span>Hosted using <img src={ghlogo} alt="github logo" style={{margin:"0 10px"}}></img><b>Github Pages</b></span>
            </div>
        )
    }
};

export default Footer;
