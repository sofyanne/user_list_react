import React from "react";

import Button from "../UI/Button";

const UserList = (props) => {
    
  return (
    <div>
      <h2>Users list</h2>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
            <Button
            id={user.id}
              type="submit"
              label="Delete"
              onClick={props.onDeleteUserInput}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
