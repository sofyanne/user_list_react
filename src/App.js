import logo from "./logo.svg";
import "./App.css";

import UserInput from "./components/UserList/UserInput";
import UserList from "./components/UserList/UserList";
import { useState } from "react";

function App() {
  const [user, setUserInput] = useState([
    // { id: "1", username: "firstuser", age: "30" },
  ]);

  const addUserInputHandler = (userData) => {
    setUserInput(prevUsers => {
      let updatedUser = [...prevUsers];
      updatedUser.unshift(userData);
      return updatedUser;
    });
  };

  const deleteUserInputHandler = (event) => {
    setUserInput((prevUsers) => {
      const updatedUsers = prevUsers.filter(
        (user) => user.id !== event.target.id
      );

      return updatedUsers;
    });
  };

  return (
    <div className="App">
      <h1>User React List</h1>
      <UserInput method="POST" onAddUserInput={addUserInputHandler} />
      <UserList users={user} onDeleteUserInput={deleteUserInputHandler} />
    </div>
  );
}

export default App;
