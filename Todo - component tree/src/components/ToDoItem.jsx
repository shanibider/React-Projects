import React from "react";


// ToDoItem props are: key, id, text, onChecked
// Represents an individual to-do item in the to-do list
function ToDoItem(props) {

  // has an onClick event handler that calls the props.onChecked function
  // and passes the props.id as an argument. This is used to handle the deletion of the item.
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {/* li element that displays the props.text, which represents the text of the to-do item. */}
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
