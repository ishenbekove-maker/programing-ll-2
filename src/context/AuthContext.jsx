import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    // Автоматически добавляем токен в заголовки axios
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
        setLoading(false);
    }, [token]);

    // Регистрация
    const register = async (username, email, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/register', {
                username,
                email,
                password
            });
            return res.data;
        } catch (error) {
            throw error.response?.data || { message: 'Ошибка при регистрации' };
        }
    };

    // Логин
    const login = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/login', {
                email,
                password
            });

            const { token: newToken, user: userData } = res.data;

            localStorage.setItem('token', newToken);
            setToken(newToken);
            setUser(userData);

            return res.data;
        } catch (error) {
            throw error.response?.data || { message: 'Ошибка входа' };
        }
    };

    // Выход
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            token, 
            register, 
            login, 
            logout, 
            loading 
        }}>
            {children}
        </AuthContext.Provider>
    );
};