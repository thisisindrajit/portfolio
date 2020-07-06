import React from 'react';

const FavItem = (props) => {
    return(
        <div className="favItem">
            {props.title}
            <span className="itemdesc" style={{color:props.colour}}>{props.desc}</span>
        </div>
    )
}

export default FavItem;