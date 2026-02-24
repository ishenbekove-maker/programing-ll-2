// src/context/PostsContext.jsx
import { createContext, useContext, useState } from 'react';
import { posts as initialPosts } from '../data/fakeData';

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (newPost) => {
    const id = Math.max(...posts.map(p => p.id || 0), 0) + 1;
    setPosts([...posts, { id, ...newPost }]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
}

export const usePosts = () => useContext(PostsContext);