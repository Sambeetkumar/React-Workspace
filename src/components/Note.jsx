import { React, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  p: 2,
};

export default function Note(props) {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTitle(props.title);
    setContent(props.content);
  };
  function handleClick() {
    props.onDelete(props.id);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUpdate(props.id, title, content);
    setOpen(false);
  };
  return (
    <div className="note text-black dark:text-white bg-white dark:bg-zinc-950 border border-black dark:border-white w-[280px]">
      <h2 className="font-bold tracking-wider">{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button onClick={handleOpen}>
        <ModeEditIcon />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="text-black dark:text-white bg-white dark:bg-zinc-800 rounded-lg w-[320px] sm:w-[400px] lg:w-[450px]"
        >
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="title"
              className="text-xl font-bold outline-none p-2 bg-white dark:bg-zinc-800 w-full"
            />
            <textarea
              required
              type="text"
              name="content"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              rows="3"
              placeholder="Content..."
              className="text-lg outline-none p-2 mb-4 bg-white dark:bg-zinc-800 w-full"
            />
            <div className="w-full flex items-center justify-end gap-2">
              <Button
                variant="outlined"
                color="warning"
                onClick={handleClose}
              >
                close
              </Button>
              <Button
                type="submit"
                variant="outlined"
                color="warning"
              >
                save
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}