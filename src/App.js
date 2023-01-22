import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import notes from "./notes";

function App() {
  const [btntxt, setBtntext] = useState("enable dark mode");
  const [btnstyle, setBtnstyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const darkModeToggle = () => {
    if (btnstyle.color === "black") {
      setBtnstyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtntext("enable light mode");
    } else {
      setBtnstyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtntext("enable dark mode");
    }
  };
  return (
    <React.Fragment className="total">
      <Header btnstyle={btnstyle} btntxt={btntxt} func={darkModeToggle} />
      {notes.map((noteitem) => (
        <Note
          key={noteitem.key}
          title={noteitem.title}
          content={noteitem.content}
        />
      ))}
      <Footer />
    </React.Fragment>
  );
}
export default App;
