import React from 'react';
let curryear = new Date().getFullYear();
function Footer() {
    return ( 
        <footer>
            <p>Copyright© {curryear}</p>
        </footer>
     );
}

export default Footer;