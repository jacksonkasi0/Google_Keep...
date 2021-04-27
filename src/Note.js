import React from "react";
import "./Note.css";

function Note({ id, deleteNote, title, content }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          deleteNote(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default Note;
