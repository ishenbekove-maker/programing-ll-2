// src/components/UserList.jsx
import React, { useState, useEffect } from 'react';
import { fetchWithDelay } from '../utils/fetchWithDelay';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchWithDelay('https://jsonplaceholder.typicode.com/users', 1500);
        setUsers(data);
      } catch (err) {
        console.error('Ошибка загрузки пользователей:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Загрузка пользователей...</p>;

 // src/components/UserList.jsx
// ... (остальной код без изменений)

return (
  <section className="content-section">
    <h2>Пользователи</h2>
    <div className="grid-container">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <div className="user-avatar">{user.name.charAt(0)}</div>
          <h3>{user.name}</h3>
          <p className="email">{user.email}</p>
          <p className="company">{user.company.name}</p>
        </div>
      ))}
    </div>
  </section>
);
};

export default UserList;