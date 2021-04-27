import React, { useState } from "react";
import "./styles.css";
import Header from "./header/header";
import CreateNote from "./CreateNote";
import Notee from "./Note";

function App() {
  const [Note, setNote] = useState([]);

  const storeNote = (newNote) => {
    setNote((preNote) => {
      return [...preNote, newNote];
    });
  };

  const deleteNote = (id) => {
    setNote((preNote) => {
      return preNote.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateNote storeNote={storeNote} />
      {Note.map((noteItems, index) => {
        return (
          <Notee
            key={index}
            title={noteItems.title}
            deleteNote={deleteNote}
            id={index}
            content={noteItems.content}
          />
        );
      })}
    </div>
  );
}
export default App;
