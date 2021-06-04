import React, { Component } from 'react';
import {withRouter} from 'react-router';
import './allprojects.css';
import Projects from '../Projects';

class AllProjects extends Component {

    componentDidMount = () => window.scrollTo(0, 0);
  
    render(){
    return (
        <>
            <div id="allprojects">
                <div id="topallproj">
                        <svg onClick={() => this.props.history.goBack()} id="backbutton" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.91988 2H16.0899C19.6199 2 21.9999 4.271 21.9999 7.66V16.33C21.9999 19.72 19.6199 22 16.0899 22H7.91988C4.37988 22 1.99988 19.72 1.99988 16.33V7.66C1.99988 4.271 4.37988 2 7.91988 2ZM9.72988 12.75H16.0799C16.4999 12.75 16.8299 12.41 16.8299 12C16.8299 11.58 16.4999 11.25 16.0799 11.25H9.72988L12.2099 8.78C12.3499 8.64 12.4299 8.44 12.4299 8.25C12.4299 8.061 12.3499 7.87 12.2099 7.72C11.9199 7.43 11.4399 7.43 11.1499 7.72L7.37988 11.47C7.09988 11.75 7.09988 12.25 7.37988 12.53L11.1499 16.28C11.4399 16.57 11.9199 16.57 12.2099 16.28C12.4999 15.98 12.4999 15.51 12.2099 15.21L9.72988 12.75Z" />
                        </svg>
                        
                    <span className="label projectlabel">All Projects</span>
                </div>
                <Projects isallproj="true" />
            </div>
            
        </>
    )
    }
}

export default withRouter(AllProjects);