import React from 'react';

function Header(props) {
    return ( 
        <header>
            <h1>Keeper App<button onClick={props.func} style = {props.btnstyle}>{props.btntxt}</button></h1>
        </header>
     );
}

export default Header;