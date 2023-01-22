import React from 'react';
import add, { substract, multiply } from "./calculator";

function App2()
{
    return (
        <ul>
            <li>{add(2,3)}</li>
            <li>{substract(4, 2)}</li>
            <li>{multiply(6,8)}</li>
        </ul>
    );
}
export default App2;