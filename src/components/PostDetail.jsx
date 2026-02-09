// src/components/PostDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchWithDelay } from '../utils/fetchWithDelay';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchWithDelay(`https://jsonplaceholder.typicode.com/posts/${id}`, 1600);
        setPost(data);
      } catch (err) {
        console.error('Ошибка загрузки поста:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) return <p>Загрузка подробностей поста...</p>;
  if (!post) return <p>Пост не найден</p>;

  // src/components/PostDetail.jsx
// ... (остальной код)

return (
  <section className="detail-section">
    <div className="detail-card">
      <h1>{post.title}</h1>
      <div className="post-meta">
        <span>Пост # {post.id}</span>
        <span>Пользователь {post.userId}</span>
      </div>
      <p className="post-body">{post.body}</p>

      <Link to="/" className="back-btn">
        ← Вернуться на главную
      </Link>
    </div>
  </section>
);
};

export default PostDetail;