import React, { useState } from "react";
import "./CreateNote.css";

const CreateNote = ({ storeNote }) => {
  const [Expanded, setExpnded] = useState(false);

  const [Note, setNote] = useState({
    title: "",
    content: ""
  });

  const Exdand = () => {
    setExpnded(true);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value
      };
    });
  };

  const submite = (event) => {
    event.preventDefault();
    storeNote(Note);
    setNote(() => {
      return {
        title: "",
        content: ""
      };
    });
    setExpnded(false);
  };

  return (
    <div>
      <form className="CreateNote">
        {Expanded && (
          <input
            name="title"
            value={Note.title}
            placeholder="Title"
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          value={Note.content}
          placeholder="Take a note..."
          onClick={Exdand}
          onChange={handleChange}
          rows={Exdand ? 3 : 1}
        />
        <button onClick={submite}>Add</button>
      </form>
    </div>
  );
};
export default CreateNote;
