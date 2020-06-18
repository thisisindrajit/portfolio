import React from 'react';
import {Component} from 'react';

class MainComponent extends Component {
    render() {
        return(
            <div className="main">
                <code>{"<div> Hello! I am Indrajit, a "}<span className="highlight">full stack web developer</span>{" from India. </div>"}</code>
            </div>
        );
    }
}

export default MainComponent;