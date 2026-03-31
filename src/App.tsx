/** @format */

import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import UserList from "./components/UserList/UserList";

function App() {
  const GeregistreerdePersonen = ["Karel", "Els", "Piet"];
  return (
    <>
      <div>
        <RegistrationForm />
        <hr />
        <UserList />
      </div>
    </>
  );
}

export default App