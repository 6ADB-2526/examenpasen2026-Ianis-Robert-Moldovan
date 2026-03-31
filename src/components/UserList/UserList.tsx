/** @format */

import "./UserList.css";

interface Props {
  users: string;
  registeredUser: string;
}

export default function UserList({ users, registeredUsers }: Props) {
  const GeregistreerdePersonen = ["Karel", "Els", "Piet"];
  return (
    <>
      <h1>Users</h1>
      <ul>
        {GeregistreerdePersonen.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}
