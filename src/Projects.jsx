import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return(
        <div id="projects">
            <ProjectCard name="Axel" image="./axel.png"
            desc="Axel is a web app to connect startups and mentors. It is a platform where
            startups and mentors can connect seamlessly, startups can get insights from highly
            experienced people in the industry and mentors can fulfill their passion to guide startups."
            tech="HTML, CSS, PHP, MySQL"/>
            <ProjectCard name="Rustom" image="./rustom.png"
            desc="Rustom is a car dealership website which can be used to buy and sell
            new cars, old cars and also to rent cars. It's easy-to-use interface makes buying, selling and renting 
            of cars easier and more user friendly."
            tech="HTML, Bootstrap, PHP, MySQL"/>
            <div id="quote">
            "Knowledge is of no value unless you put it into practice."
            <span id="saidby">Anton Chekhov</span>
            </div>
            <ProjectCard name="Elucida" image="./Elucida.png"
            desc="Elucida is an android app which brings up a prioritized list of all nearby
            hospitals based on a user's location and also contains medical information 
            and emergency contacts of users all of which can be helpful in case of an emergency."
            tech="Java"/> 
        </div>
    )
}

export default Projects;