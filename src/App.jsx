import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm.jsx';   // ← добавь эту строку

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
          <Route path="/post/new" element={<PostForm />} />
        </Routes>
      </main>
    </div>
  );
  
}


export default App;