import logo from "./logo.svg";
import "./App.css";

import UserInput from "./components/UserList/UserInput";
import UserList from "./components/UserList/UserList";
import { useState } from "react";

function App() {
  const [user, setUserInput] = useState([
    { id: "1", username: "firstuser", age: "30" },
  ]);

  const addUserInput = (event) => {
    event.preventDefault();
    setUserInput((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        id: Math.random().toString(),
        username: event.target[0].value,
        age: event.target[1].value,
      });
      return updatedUsers;
    });
  };

  return (
    <div className="App">
      <h1>User React List</h1>
      <UserInput method="POST" addUserInputHandler={addUserInput} />
      <UserList users={user} />
    </div>
  );
}

export default App;
