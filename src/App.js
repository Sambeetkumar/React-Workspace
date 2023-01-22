import './App.css';
import React from 'react'; 
import Navbar from './components/Navbar';
import Textinput from './components/Textinput';
function App() {
  return (
    <div>
      <Navbar title="Explore" />
      <Textinput heading ="Text manager" />
    </div>
  );
}

export default App;