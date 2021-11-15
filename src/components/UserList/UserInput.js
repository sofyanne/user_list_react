import React, { useState } from "react";

import Button from "../UI/Button";

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      id: Math.random().toString(),
      username: enteredUsername,
      age: +enteredAge,
    };
    props.onAddUserInput(userData);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div>
      <h2>Add a new user</h2>
      <form method={props.method} onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
        </div>
        <Button type="submit" label="Add User" />
      </form>
    </div>
  );
};

export default UserInput;
