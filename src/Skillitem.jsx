import React from 'react';

const Skillitem = (props) => {
    return(
        <div className="skillitem">
            {props.skill}
            <div className="skillpercentage">
                <div className="percentage" style={{width:props.percentage + "%"}}></div>
            </div>
            <span className="percentage-text">{props.percentage}%</span>
        </div>
    )
}

export default Skillitem;