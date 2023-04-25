import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
      }
    return (
        <div className='note text-black dark:text-white bg-white dark:bg-zinc-950 border border-black dark:border-white w-[280px]'>
            <h2 className='font-bold tracking-wider'>{props.title}</h2>
            <p >{props.content}</p>
            <button onClick={handleClick}><DeleteIcon /></button>
        </div>
    );
}