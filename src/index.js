import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
var numbers = [3, 56, 2, 48, 5];
const newnumber = numbers.map(x =>  x*x )
console.log(newnumber);

////Map -Create a new array by doing something with each item in an array.
 const newNumbers2 = numbers.map((x) => {
   return x * 2;
 });
 console.log(newNumbers2);

//////Filter - Create a new array by keeping the items that return true.
const newNumbers3 = numbers.filter(function(num) {
   return num < 10;
 });
console.log(newNumbers3);
//Reduce - Accumulate a value by doing something to each item in an array.
 var newNumber4 = numbers.reduce(function (accumulator, currentNumber) {
     return accumulator * currentNumber;
 })
 console.log(newNumber4);

////Find - find the first item that matches from an array.
const newNumber5 = numbers.find(num =>  num > 10)
console.log(newNumber5);
////FindIndex - find the index of the first item that matches.
 const newNumber6 = numbers.findIndex(num =>  num > 10)
 console.log(newNumber6)