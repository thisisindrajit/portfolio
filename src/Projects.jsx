import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

class Projects extends Component {

    render() {
        return (
            <>
                <div id="projects">
                    <ProjectCard name="Evolve" image="./evolve.png"
                        desc="Evolve is an online investment portfolio management system where users can keep track of all the assets that they have invested in and how well their assets are performing."
                        projlink="https://github.com/thisisindrajit/Evolve"
                        tech="ReactJS, Snowpack, PHP, MySQL" />
                    <ProjectCard name="Nhanc" image="./nhanc.png"
                        desc="Academic project under the domain image processing to enhance low-res mobile images to DSLR quality levels using GANs (Generative Adversarial Networks) and Deep Convolutional Neural Networks."
                        projlink="https://github.com/thisisindrajit/Using-Deep-CNN-to-enhance-low-res-photos-to-match-the-quality-of-DSLR-cameras"
                        tech="Python, Tensorflow, Google Colab, Numpy" />
                    {this.props.isallproj === "false" && <div id="quote">
                        "Knowledge is of no value unless you put it into practice."
            <span id="saidby">Anton Chekhov</span>
                    </div>}
                    <ProjectCard name="Armamentum" image="./armamentum.png"
                        desc="Armamentum is a custom new tab page with a minimalist, visually pleasing design and a plethora of content. It makes extensive use of various APIs."
                        projlink="https://thisisindrajit.github.io/Armamentum/"
                        tech="ReactJS, CSS, NodeJS, FaunaDB" />

                    {/*All extra projects*/}
                    {this.props.isallproj === "true" &&

                        <>
                            <ProjectCard name="Exordium" image="./exordium.png"
                                desc="Exordium is a mobile application developed for my college library. It is designed with an aim to describe the various resources and opportunities available at the library."
                                projlink="https://play.google.com/store/apps/details?id=com.exordium.library_demo"
                                tech="Flutter, Dart" />
                            <ProjectCard name="Axel" image="./axel.png"
                                desc="Axel is a web app to connect startups and mentors. It is a platform where
            startups and mentors can connect seamlessly, startups can get insights from highly
            experienced people in the industry and mentors can fulfill their passion to guide startups."
                                projlink="http://thisisaxel.000webhostapp.com/"
                                tech="HTML, CSS, PHP, MySQL" />
                            <ProjectCard name="Rustom" image="./rustom.png"
                                desc="Rustom is a car dealership website which can be used to buy and sell
            new cars, old cars and also to rent cars. It's easy-to-use interface makes buying, selling and renting 
            of cars easier and more user friendly."
                                projlink="https://github.com/thisisindrajit/Rustom"
                                tech="HTML, Bootstrap, PHP, MySQL" />
                            <ProjectCard name="Elucida" image="./Elucida.png"
                                desc="Elucida is an android app which brings up a prioritized list of all nearby
            hospitals based on a user's location and also contains medical information 
            and emergency contacts of users all of which can be helpful in case of an emergency."
                                projlink="https://github.com/thisisindrajit/Elucida"
                                tech="Java" />
                        </>}
                </div>
                {this.props.isallproj === "false" && <Link to="projects" style={{ textDecoration: "none" }}><div id="allprojbut">🤓 Show all Projects!</div></Link>}
            </>
        )
    }
}

export default Projects;