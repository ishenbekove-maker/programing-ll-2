import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/fakeData';

const PostList = () => {
  return (
    <section className="content-section">
      <h2>Посты</h2>
      <div className="grid-container">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="post-card"
            style={{ '--order': index }}
          >
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 120)}...</p>
            <Link to={`/post/${post.id}`} className="action-btn view">
              Читать полностью →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostList;