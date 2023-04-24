import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="app min-h-screen relative flex flex-col gap-4 bg-zinc-100 dark:bg-zinc-900">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="flex flex-col sm:flex-row sm:gap-4 flex-wrap my-6 items-center justify-center">
        {notes.map((noteitem, index) => (
          <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default App;
