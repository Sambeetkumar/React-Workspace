import React from 'react';
let curryear = new Date().getFullYear();
function Footer() {
    return ( 
        <footer>
            <p>CopyrightÂ© {curryear}</p>
        </footer>
     );
}

export default Footer;