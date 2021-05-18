import React, { useEffect, useState } from 'react'

function Users() {
  const [allUsers, setAllUsers] = useState(null)
  //const [newUser, setNewUser] = useState({})
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) => setAllUsers(data))
      .catch((err) => console.log('This is error', err))
  }, [])
  console.log(allUsers)
  return (
      <div className="container">
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>First Names</h4>
      </li>
      {allUsers && allUsers.map((user) => {
        return (
          <li className="collection-item">
            <div>
              {user.email}
              <a href="#!" className="secondary-content">
                <i className="material-icons">send</i>
              </a>
            </div>
          </li>
        )
      })}
    </ul>
    <label>Email</label>
    <input onChange=""/>
    <label>Password</label>
    <input />
    </div>
  )
}

export default Users
