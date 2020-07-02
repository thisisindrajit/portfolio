import React from 'react';
import Skillitem from './Skillitem'

const Skills = () => {
        return(
            <div id="skills">
                <div className="tag skill-tag">My Top 5 Skills</div>
                <Skillitem skill="CSS" percentage="80"/>
                <Skillitem skill="HTML" percentage="60"/>
                <Skillitem skill="JavaScript" percentage="70"/>
                <Skillitem skill="React" percentage="50"/>
                <Skillitem skill="PHP" percentage="40"/>
            </div>
        );
};

export default Skills;