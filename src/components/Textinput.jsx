import React, { useState } from "react";
let Height = {
  height : 200
}
function Textinput(props) {
  const [text, setText] = useState("");
  const edit = (event) => {
  setText(event.target.value);
  }
  const ConvertUpper = () => {
  let newtext = text.toUpperCase();
  setText(newtext);
  }
  const ConvertLower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  let word;
  if (text === "")
  {
    word = 0
  }
  else {
    word = text.split(" ").length;
  }
  let character = text.length;
  return (
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="form-floating container mt-5">
      <textarea
        className="form-control"
        id="floatingTextarea2"
        style={Height}
        value={text}
        onChange={edit}
      ></textarea>
      <label for="floatingTextarea2">Drop your idea below</label>
        <button type="button" class="btn btn-primary mt-3" onClick={ConvertUpper}> Convert to uppercase</button>
        <button type="button" class="btn btn-primary mt-3 mx-3" onClick ={ConvertLower}> Convert to lowercase</button>
      </div>
      <div className="mt-3">
        <h2>Text Summary</h2>
        <p>{word} words and {character} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
    </div>
  );
}
export default Textinput;