import React from 'react';

const FavItem = (props) => {
    return(
        <div className="favItem">
            
            <div className="itemtitle">
                <span style={{marginRight:"5px"}}>{props.heart}</span>{props.title}
            </div>
            
            <div className="itemdesc" style={{color:props.colour}}>{props.desc}</div>
        </div>
    )
}

export default FavItem;