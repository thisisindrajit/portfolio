import React from 'react';

const FavItem = (props) => {
    return(
        <div className="favItem">
            
            <div className="itemtitle">
                <span style={{fontSize:"1rem",marginRight:"5px",marginTop:"1px"}}>{props.heart}</span>
                <span>
                {props.title}
                <div className="itemdesc" style={{color:props.colour}}>{props.desc}</div>
                </span>
            </div>
            
        </div>
    )
}

export default FavItem;