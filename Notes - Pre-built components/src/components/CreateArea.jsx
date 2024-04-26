import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

// CreateArea have one prop called 'onAdd',
// which is a function that takes a new note as an argument and appends it to the notes array using the setNotes function provided by the useState hook.
function CreateArea(props) {

  // declare A boolean state variable that determines whether the form is expanded or not. It is initialized as false.
  const [isExpanded, setExpanded] = useState(false);

  // An object state variable that contains the note's title and content, both initialized as empty strings.
  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  // update the note state variable based on the input field changes.
  function handleChange(event) {
    const { name, value } = event.target;// destructuring to get the name and value from the event target
  
    // It then sets the note state using the previous state and spreads its properties, updating the specific property specified by name with the new value.
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }


// called when the form is submitted.
// It invokes the onAdd prop (passed from a parent component- <CreateArea onAdd={addNote}/>) with the note object as an argument.
// Then, it resets the note state by setting title and content to empty strings. Finally, it prevents the default form submission behavior.
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }


// called when the textarea element is clicked, and it sets the isExpanded state to true.
  function expand() {
    setExpanded(true);
  }



// represents the form for creating notes:
// Within the form, the conditionally rendered input element is displayed if isExpanded is true.
// It captures the note's title with name, onChange event listener, and value from the note state. It has a placeholder text "Title".

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        {/* The textarea element (create a multi-line input field) for the content is rendered with placeholder text. 
        Its have props:
        name: specifies the name of the input field ("content"),
        onClick: attaches 'expand' event handler. When textarea is clicked, the expand function will be called, which sets the isExpanded state to true, making the input field expand.
        onChange: attaches 'handleChange' event handler function. When user makes changes to the textarea (e.g., types or removes text), the handleChange function will be called to update the note state with the new content.
        value: sets the initial value of textarea to the value of the content property in the note state object. This ensures that the input field reflects the current content of the note.
        placeholder: placeholder text displayed in the textarea
        rows: number of visible rows in textarea. If isExpanded is true, it sets the number of rows to 3, otherwise it sets it to 1.
        */}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
          
          {/* Zoom component apply a zoom effect to its child components. The in prop control whether the zoom effect should be applied.
          In this case, it is set to the value of the isExpanded state variable. When isExpanded is true, the zoom effect is applied, and when it's false, the zoom effect is not applied.
          Fab component is a floating action button from Material-UI. Clickable button that performs an action. onClick prop attach the submitNote function as the event handler for when the button is clicked. Then the submitNote function is called.
          AddIcon component renders an icon to represent the action of adding a note. It is a pre-defined Material-UI component which displays a plus sign (+) by default. It is wrapped inside the Fab component, and when the button is clicked, the submitNote function is triggered.
          */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
