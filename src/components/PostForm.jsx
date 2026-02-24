// src/components/PostForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../context/PostsContext';

export default function PostForm() {
  const navigate = useNavigate();
  const { addPost } = usePosts();

  const [form, setForm] = useState({
    title: '',
    body: '',
    userId: 1, // можно потом сделать выбор автора
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.body.trim()) {
      alert('Заполните заголовок и текст поста');
      return;
    }

    addPost(form);
    alert('Пост добавлен!');
    navigate('/');
  };

  return (
    <section className="content-section">
      <h2 style={{ color: '#00f0ff', textShadow: '0 0 10px #00f0ff' }}>
        Добавить новый пост
      </h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ color: '#00f0ff', display: 'block', marginBottom: '0.5rem' }}>
            Заголовок поста
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Введи крутой заголовок..."
            required
            style={{
              width: '100%',
              padding: '0.9rem',
              background: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '8px',
              color: '#e2e8f0',
              fontSize: '1.05rem',
            }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ color: '#00f0ff', display: 'block', marginBottom: '0.5rem' }}>
            Текст поста
          </label>
          <textarea
            name="body"
            value={form.body}
            onChange={handleChange}
            placeholder="Напиши свой пост здесь..."
            required
            rows={10}
            style={{
              width: '100%',
              padding: '0.9rem',
              background: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '8px',
              color: '#e2e8f0',
              fontSize: '1.05rem',
              resize: 'vertical',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            type="submit"
            style={{
              padding: '0.9rem 2rem',
              background: 'linear-gradient(90deg, #0066cc, #0099ff)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(0, 102, 204, 0.6)',
              transition: 'all 0.3s',
            }}
            onMouseOver={(e) => e.target.style.boxShadow = '0 0 30px rgba(0, 102, 204, 0.9)'}
            onMouseOut={(e) => e.target.style.boxShadow = '0 0 20px rgba(0, 102, 204, 0.6)'}
          >
            Опубликовать пост
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              padding: '0.9rem 2rem',
              background: '#334155',
              color: '#e2e8f0',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Отмена
          </button>
        </div>
      </form>
    </section>
  );
}