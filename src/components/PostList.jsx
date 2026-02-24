// src/components/PostList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../context/PostsContext';

export default function PostList() {
  const { posts } = usePosts();

  return (
    <section className="content-section">
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <h2 style={{
          color: '#00f0ff',
          textShadow: '0 0 12px rgba(0, 240, 255, 0.6)',
          margin: 0
        }}>
          Посты
        </h2>

        <Link
          to="/post/new"
          style={{
            padding: '0.8rem 1.8rem',
            background: 'linear-gradient(90deg, #0066cc, #0099ff)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.05rem',
            boxShadow: '0 0 20px rgba(0, 102, 204, 0.6)',
            transition: 'all 0.3s',
            whiteSpace: 'nowrap'
          }}
          onMouseOver={(e) => {
            e.target.style.boxShadow = '0 0 30px rgba(0, 102, 204, 0.9)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.boxShadow = '0 0 20px rgba(0, 102, 204, 0.6)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          + Новый пост
        </Link>
      </div>

      <div className="grid-container">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="post-card"
            style={{ '--order': index }}
          >
            <h3 style={{
              color: '#00f0ff',
              textShadow: '0 0 8px rgba(0, 240, 255, 0.5)',
              marginBottom: '0.8rem'
            }}>
              {post.title}
            </h3>

            <p style={{
              color: '#b3f0ff',
              marginBottom: '1.2rem'
            }}>
              {post.body.substring(0, 120)}...
            </p>

            <Link
              to={`/post/${post.id}`}
              style={{
                display: 'inline-block',
                padding: '0.6rem 1.3rem',
                background: 'linear-gradient(90deg, #0066cc, #0099ff)',
                color: 'white',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '500',
                boxShadow: '0 0 15px rgba(0, 102, 204, 0.5)',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.target.style.boxShadow = '0 0 25px rgba(0, 102, 204, 0.8)'}
              onMouseOut={(e) => e.target.style.boxShadow = '0 0 15px rgba(0, 102, 204, 0.5)'}
            >
              Читать полностью →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}