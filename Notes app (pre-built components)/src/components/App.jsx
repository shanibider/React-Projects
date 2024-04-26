import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // declare a state variable notes, which is initialized as an empty array.
  const [notes, setNotes] = useState([]);


  // Takes a new note as an argument and appends it to the notes array using the setNotes function provided by the useState hook.
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  // Takes an id as an argument and filters out the note with that id from the notes array
  // using the setNotes function provided by the useState hook.
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  // returns a JSX structure that represents the layout of the note-taking application
  // The Header, CreateArea, and Footer components are rendered.
  // CreateArea component is rendered to allow users to create new notes. The onAdd prop is passed to the CreateArea component and is set to the addNote function.
 // The notes array is mapped over using the map function.
 //For each note, a Note component is rendered, with the note's data and the deleteNote function passed as props.
  return (
    <div>
      <Header />

      <CreateArea onAdd={addNote} />

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
