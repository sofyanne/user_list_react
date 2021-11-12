import React from "react";

const UserList = (props) => {
  return (
    <div>
      <h2>Users list</h2>

      {props.users.map((user) => (
        <p key={user.id}>
          {user.username} ({user.age} years old)
        </p>
      ))}
    </div>
  );
};

export default UserList;
