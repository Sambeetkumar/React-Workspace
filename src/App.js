import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";

function App() {
  const [btntxt, setBtntext] = useState("enable dark mode");
  const [btnstyle, setBtnstyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [notes, setNotes] = useState([]);
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
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <React.Fragment className="total">
      <Header btnstyle={btnstyle} btntxt={btntxt} func={darkModeToggle} />
      <CreateArea onAdd={addNote} />
      {notes.map((noteitem,index) => (
        <Note
          key={index}
          id={index}
          title={noteitem.title}
          content={noteitem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </React.Fragment>
  );
}
export default App;
