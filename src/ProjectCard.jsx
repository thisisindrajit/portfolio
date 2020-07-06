import React from 'react';

const ProjectCard = (props) => {
    return(
        <div className="projectcard">
            <img className="projectlogo" src={require(`${props.image}`)} alt="project_logo"></img>
            <div className="content">
                <span className="projtitle">{props.name}</span>
                <span className="projdesc">{props.desc}</span>
                <div className="techused">Technologies used : {props.tech}</div>
            </div>
        </div>
    )
}

export default ProjectCard;