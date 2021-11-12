import React from "react";

import Button from "../UI/Button";

const UserInput = (props) => {
  return (
    <div>
      <h2>Add a new user</h2>
      <form method={props.method} onSubmit={props.addUserInputHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username"></input>
        </div>
        <div>
          <label htmlFor="age">Age (years)</label>
          <input type="number" name="age"></input>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default UserInput;
