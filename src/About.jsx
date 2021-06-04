import React from 'react';
import logo from './logo.png';
import mypic from './mypic.jpg';

const About = () => {
        return(
            <div id="about">

                <div id="main-content">

                    <div className="imgholder">
                        <img src={logo} alt="profile_picture"></img>
                    </div>

                    <div className="content">
                    I am Indrajit, a full stack web developer from India. I am currently pursuing BE Computer Science and Engineering in PSG College of Technology, Coimbatore.
                    I am extremely interested in full stack web development and crazy about Artificial Intelligence🤖.
                    My hobbies include reading books📚, watching movies, playing football⚽, listening to music and much more.
                    </div>

                </div>

                <div id="mygrid">

                <div id="mypic">
                <img src={mypic} alt="my_photo"></img>
                This is me!😁 Looking good, eh?😜
                </div>

                <div id="mymusic">
                    I also compose my own songs🎹 in my leisure time! Check out some of my compositions!😄
                    <div id="musicgrid">
                    <iframe title="v1" src="https://www.youtube.com/embed/xTN2vYSf6Us" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe title="v2" src="https://www.youtube.com/embed/wrc_8Zc-G5M" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

                </div>
            </div>
        );
}

export default About;