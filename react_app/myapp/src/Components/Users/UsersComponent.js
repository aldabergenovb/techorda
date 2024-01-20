import React, { useEffect, useState } from "react";
import Users from "./Users";

function UsersComponent() {
  const [users, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Users();
        setPosts(response);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <table className="table-test">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Middle Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.maidenName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersComponent;
