import React from 'react';
import { users } from '../data/fakeData';

const UserList = () => {
  return (
    <section className="content-section">
      <h2>Пользователи</h2>
      <div className="grid-container">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="user-card"
            style={{ '--order': index }}
          >
            <div className="user-avatar">{user.name[0]}</div>
            <h3>{user.name}</h3>
            <p className="username">@{user.username}</p>
            <p className="email">{user.email}</p>
            <p className="company">{user.company.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserList;