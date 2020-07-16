import React from 'react';

function gotopage(url)
{
    window.open(url,"_blank");
}

const SocialCard = (props) => {

    return(
        <div className="card-social" data={props.data} onClick={() => gotopage(props.url)}>
            <img src={require(`${props.src}`)} alt="logo"></img>
        </div>
    );
}

export default SocialCard;