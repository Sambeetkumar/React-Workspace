import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
      }
    return (
        <div className='note bg-white dark:bg-zinc-950 border dark:border-white w-[280px]'>
            <h2 className='text-white font-bold tracking-wider'>{props.title}</h2>
            <p className='text-white'>{props.content}</p>
            <button onClick={handleClick}><DeleteIcon /></button>
        </div>
    );
}