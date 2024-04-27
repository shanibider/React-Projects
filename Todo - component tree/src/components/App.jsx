import React, { useState } from "react";
import ToDoItem from "./ToDoItem";


function App() {
  // set the initial state for the input text and items:
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);


  // Implement a handler for the input change event. This function sets the value of the input text
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }


  // called when the button is clicked.
  // Adds the current input text to the list of items and clears the input text
  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }


  // removes the item from the list of items based on its index:
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>

        <ul>
        {/* ToDoItem component is used in the App component to render each individual to-do item in the list. */}
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
        
      </div>
    </div>
  );
}

export default App;
