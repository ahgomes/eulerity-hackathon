import React from 'react';

export default function Pet(props) {
    return (
        <article>
            <img src={props.info.url} alt={props.info.title} />
            <h2>{props.info.title}</h2>
            <p>{props.info.description}</p>
            <span>{props.info.created}</span>
        </article>
    );
}
