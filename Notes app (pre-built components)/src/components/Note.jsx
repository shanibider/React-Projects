import React from "react";
import DeleteIcon from "@material-ui/icons/Delete"; // Using pre built react components 

// Takes props as its parameter, which contains the properties passed to the component.
// Note's data (key, id, title, content) and the deleteNote function passed as props.
function Note(props) {

  // Event handler function that called when delete button is clicked.
  function handleClick() {
    // Calls onDelete prop (provided from parent component) with the id of the note as an argument.
    // onDelete prop expects a function that handles the deletion of the note.
    props.onDelete(props.id);
  }

  // represents the layout of the note.
  return (
    <div className="note">
      {/* rendered using values from props object. */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* handleClick set as the event handler for the 'onClick' event of the delete button. */}
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
