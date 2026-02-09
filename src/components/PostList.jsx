// src/components/PostList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchWithDelay } from '../utils/fetchWithDelay';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchWithDelay('https://jsonplaceholder.typicode.com/posts', 2200);
        setPosts(data.slice(0, 8)); // берём только первые 8 для красоты
      } catch (err) {
        console.error('Ошибка загрузки постов:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Загрузка постов...</p>;

  // src/components/PostList.jsx
// ... (остальной код)

return (
  <section className="content-section">
    <h2>Посты (нажми для деталей)</h2>
    <div className="grid-container">
      {posts.map(post => (
        <Link to={`/post/${post.id}`} key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.body.substring(0, 120)}...</p>
          <div className="post-footer">
            <span>Читать далее →</span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);
};

export default PostList;