import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(formData.email, formData.password);
            alert('Вход выполнен успешно!');
            navigate('/profile');     // после логина переходим в профиль
        } catch (err) {
            setError(err.message || 'Неверный email или пароль');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
            <h2>Вход в аккаунт</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
                />
                <button 
                    type="submit" 
                    disabled={loading}
                    style={{ width: '100%', padding: '10px', marginTop: '10px' }}
                >
                    {loading ? 'Вход...' : 'Войти'}
                </button>
            </form>

            <p style={{ marginTop: '15px' }}>
                Нет аккаунта? <a href="/register">Зарегистрироваться</a>
            </p>
        </div>
    );
};

export default Login;