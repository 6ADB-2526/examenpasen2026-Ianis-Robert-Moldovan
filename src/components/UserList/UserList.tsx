/** @format */

import "./UserList.css";

interface Props {
  Users: string;
  registeredUsers: string;
}

export default function UserList({ Users, registeredUsers }: Props) {
  return (
    <>
      {/* <h1>Users</h1>
      <ul>
        {registeredUsers.map((user: string, index: number) => (
          <li key={index}>{user}</li>
        ))}
      </ul> */}
    </>
  );
}
