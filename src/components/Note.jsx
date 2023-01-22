import React from 'react';

export default function Note(props) {
    return (
        <div className='note'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}