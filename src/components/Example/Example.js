import { useState } from "react";

function Example() {
  const [A, setA] = useState("");
  const [B, setB] = useState("");

  const onAChange = (event) => {
    setA(event.target.value);
  };
  const onBChange = (event) => {
    setB(event.target.value);
  };
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // const onFirstNameChange = (event) => {
  //   setFirstName(event.target.value);
  // }
  // const onLastNameChange = (event) => {
  //   setLastName(event.target.value);
  // }

  return (
    <div className="Example">
      A + B = {(+A) + (+B)}
      <br />
      <label>
        A:
        <input type="text" onChange={onAChange} />
      </label>
       <br />
      <label>
        B:
        <input type="text" onChange={onBChange} />
      </label>

      {/* {firstName} {lastName}<br/>
      <label>
        First name:
        <input type="text" onChange={onFirstNameChange}/>
      </label>
      <label>
        Last name:
        <input type="text" onChange={onLastNameChange}/>
      </label> */}
    </div>
  );
}

export default Example;
