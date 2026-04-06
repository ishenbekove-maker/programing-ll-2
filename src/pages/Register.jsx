import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { register } = useContext(AuthContext);
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
            await register(formData.username, formData.email, formData.password);
            alert('✅ Регистрация прошла успешно!');
            navigate('/login');
        } catch (err) {
            const errorMsg = err?.response?.data?.message || err?.message || 'Ошибка регистрации';
            setError(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            maxWidth: '420px',
            margin: '80px auto',
            padding: '30px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Регистрация</h2>
            
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Имя пользователя"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email адрес"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />

                <button 
                    type="submit" 
                    disabled={loading}
                    style={buttonStyle}
                >
                    {loading ? 'Регистрация...' : 'Зарегистрироваться'}
                </button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '20px' }}>
                Уже есть аккаунт?{' '}
                <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>
                    Войти
                </Link>
            </p>
        </div>
    );
};

const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '16px'
};

const buttonStyle = {
    width: '100%',
    padding: '12px',
    marginTop: '10px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer'
};

export default Register;