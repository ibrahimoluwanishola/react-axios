// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    // Replace 'https://jsonplaceholder.typicode.com/users' with the actual API link
    const apiLink = 'https://jsonplaceholder.typicode.com/users';

    // Fetch data using Axios from the specified link
    axios.get(apiLink)
      .then(response => {
        // Update state with fetched data
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
