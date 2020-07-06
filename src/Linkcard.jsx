import React from 'react';

function gotopage(url)
{
    window.open(url,"_blank");
}

const Linkcard = (props) => {
    return (
        <div className="linkcard" onClick={() => gotopage(props.url)}>
            <img src={require(`${props.src}`)} alt="logo"></img>
            <span className="caption">{props.name}</span>
        </div>
    )
}

export default Linkcard;