import React from "react";

import Button from "../UI/Button";

const UserList = (props) => {
  let content =
    props.users.length > 0 ? (
      props.users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.age} years old)
          <Button
            id={user.id}
            type="submit"
            label="Delete"
            onClick={props.onDeleteUserInput}
          />
        </li>
      ))
    ) : (
      <p>Il n'y a aucun utilisateur</p>
    );

  return (
    <div>
      <h2>Users list</h2>
      <ul>{content}</ul>
    </div>
  );
};

export default UserList;
