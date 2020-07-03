import React from 'react';

const Article = (props) => {
    return(
    <div className="article">
        <div className="title" title={props.title}>{props.title}</div>
        <p className="articlecontent">{props.content}</p>
        <a className="link" href={props.url} rel="noopener noreferrer" target="_blank">Read more</a>
    </div>);
}

export default Article;