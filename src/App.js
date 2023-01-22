import './App.css';

let date = new Date();
let currentTime = date.getHours();
let message;
let Heading1 = {
  color: "red",
  borderBottom: "5px solid red",
  textAlign : "center"
}
if (currentTime < 12)
{
  message = "Good Morning";
} else if (currentTime < 18)
{
  message = "Good Evening";
  Heading1.color = "green";
} else {
  message = "Good Night";
  Heading1.color = "blue";
}
let name = "Sambeet";
  
  
function App() {
  return (
    <div>
      <p>Time = {currentTime}</p>
      <h1 className='heading1' style={Heading1}>{message + " " + name}</h1>
    </div>
  );
}

export default App;
