import React, { useState } from "react";

// Full Todo App
function InputArea(props) {
  // state to store the input text. Initial value is set to an empty string:
  const [inputText, setInputText] = useState("");

  // gets called when the input value changes. It updates the inputText state with the new value from the event
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input 
      onChange={handleChange}
      type="text"
      value={inputText}
      />
      {/* onClick event that calls the props.onAdd function, passing inputText as an argument,
      and then sets the inputText value back to an empty string using setInputText. */}
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
