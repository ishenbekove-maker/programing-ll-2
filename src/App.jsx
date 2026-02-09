// src/App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Фейковый блог с JSON</h1>
        <p>Данные загружаются с задержкой из jsonplaceholder</p>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <UserList />
              <PostList />
            </>
          } />

          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;