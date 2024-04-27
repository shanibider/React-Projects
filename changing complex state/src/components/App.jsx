import React, { useState } from "react";

function App() {
  // fullName stores the first name and last name
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });


  // Event handler for input field change
  function handleChange(event) {
    const { value, name } = event.target;

    // Updating the fullName state based on the input field changed
    setFullName(prevValue => {
      if (name === "fName") {
        // If the first name field is changed, update the fName property
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        // If the last name field is changed, update the lName property
        return {
          fName: prevValue.fName,
          lName: value8
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
