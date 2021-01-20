import React from 'react';

const ProjectCard = (props) => {

    let link = null;

    if (props.projlink)
    {
    link = <a className="projlink" href={props.projlink} target="_blank" rel="noopener noreferrer">Check out the project!</a>
    }

    return(
        <div className="projectcard">
            <img className="projectlogo" src={require(`${props.image}`)} alt="project_logo"></img>
            <div className="content">
                <span className="projtitle">{props.name}</span>
                <span className="projdesc">{props.desc}
                {link}
                </span>
                <div className="techused">Technologies used : {props.tech}</div>
            </div>
        </div>
    )
}

export default ProjectCard;