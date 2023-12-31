
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    const apiLink = 'https://jsonplaceholder.typicode.com/users';

    axios.get(apiLink)
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h2 className="user-list-header">User List</h2>
      <ul className="user-list">
        {listOfUser.map(user => (
          <li key={user.id} className="user-list-item">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
