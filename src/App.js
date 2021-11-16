import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import UserInput from "./components/UserList/UserInput";
import UserList from "./components/UserList/UserList";
import Modal from "./components/UI/Modal";

function App() {
  const [user, setUserInput] = useState([
    // { id: "1", username: "firstuser", age: "30" },
  ]);
  const [modalContent, setModalContent] = useState({
    display: false,
    title: "",
    message: "",
  });

  const displayModalHandler = () => {
    setModalContent({display: false});
  };

  const addUserInputHandler = (userData) => {
    if (userData.username.trim().length < 1) {
      setModalContent({
        display: true,
        title: "Nom d'utilisateur invalide",
        message:
          "Le nom d'utilisateur ne contient pas le nombre de caractère suffisant",
      });
      return;
    } else if (userData.age < 1) {
      setModalContent({
        display: true,
        title: "Age invalide",
        message: "L'age ne peut être inférieur a 1",
      });
      return;
    }

    setUserInput((prevUsers) => {
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
      <Modal className={!modalContent.display ? "none" : "block"} title={modalContent.title} message={modalContent.message} validation={displayModalHandler} />
    </div>
  );
}

export default App;
