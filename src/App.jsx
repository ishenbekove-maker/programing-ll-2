import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
    const { user, loading, logout } = useContext(AuthContext);

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '20px' }}>Загрузка...</div>;
    }

    return (
        <Router>
            <div style={{ minHeight: '100vh', background: '#f4f7fa', fontFamily: 'Arial, sans-serif' }}>
                {/* Навигационная панель */}
                <nav style={{
                    background: '#333',
                    color: 'white',
                    padding: '15px 30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h2 style={{ margin: 0 }}>My App</h2>
                    
                    <div>
                        {user ? (
                            <>
                                <span style={{ marginRight: '20px' }}>
                                    Привет, <strong>{user.username}</strong>!
                                </span>
                                <Link to="/profile" style={navLinkStyle}>Профиль</Link>
                                <button onClick={logout} style={logoutButtonStyle}>
                                    Выйти
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/" style={navLinkStyle}>Главная</Link>
                                <Link to="/register" style={navLinkStyle}>Регистрация</Link>
                                <Link to="/login" style={navLinkStyle}>Вход</Link>
                            </>
                        )}
                    </div>
                </nav>

                {/* Основной контент */}
                <Routes>
                    {/* Главная страница с кнопками */}
                    <Route path="/" element={
                        <div style={{ textAlign: 'center', marginTop: '100px', padding: '20px' }}>
                            <h1 style={{ fontSize: '48px', color: '#333' }}>Добро пожаловать!</h1>
                            <p style={{ fontSize: '22px', color: '#666', margin: '20px 0' }}>
                                Пожалуйста, зарегистрируйтесь или войдите в аккаунт
                            </p>

                            <div style={{ marginTop: '50px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                <Link to="/register">
                                    <button style={bigButtonStyle}>
                                        Зарегистрироваться
                                    </button>
                                </Link>

                                <Link to="/login">
                                    <button style={bigButtonStyle}>
                                        Войти в аккаунт
                                    </button>
                                </Link>
                            </div>

                            {user && (
                                <div style={{ marginTop: '40px' }}>
                                    <p>Вы уже авторизованы как <strong>{user.username}</strong></p>
                                    <Link to="/profile">
                                        <button style={{ padding: '12px 30px', fontSize: '18px' }}>
                                            Перейти в профиль
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    } />

                    {/* Регистрация */}
                    <Route path="/register" element={!user ? <Register /> : <Navigate to="/profile" />} />

                    {/* Логин */}
                    <Route path="/login" element={!user ? <Login /> : <Navigate to="/profile" />} />

                    {/* Профиль (защищённый) */}
                    <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

// Стили для кнопок и ссылок
const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '20px',
    fontSize: '16px'
};

const bigButtonStyle = {
    padding: '15px 40px',
    fontSize: '20px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s'
};

const logoutButtonStyle = {
    padding: '8px 16px',
    background: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

export default App;