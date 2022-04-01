import {useState} from "react";


function Example() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  }


  
  return ( 
    <div className="Example">
      {firstName} {lastName}<br/>
      <label>
        First name:
        <input type="text" onChange={onFirstNameChange}/>
      </label>
      <label>
        Last name:
        <input type="text" onChange={onLastNameChange}/>
      </label>
    
      
    </div>
   );
}

export default Example;