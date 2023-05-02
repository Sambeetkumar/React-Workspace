import React, { useState, useEffect, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const formRef = useRef(null);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setExpanded] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title === "" || note.content === "") {
      alert("Please fill all the fields");
    } else {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    }
  }
  function expand() {
    setExpanded(true);
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef]);

  return (
      <form ref={formRef} className="create-note text-black dark:text-white mx-auto mt-6 bg-white dark:bg-zinc-950 border dark:border-white shadow-md shadow-zinc-950/30">
        {isExpanded && (
          <input
            className="bg-white dark:bg-zinc-950 font-bold tracking-wider"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            required
          />
        )}
        <textarea
          className="bg-white dark:bg-zinc-950"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          onClick={expand}
          required
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
  );
}

export default CreateArea;
