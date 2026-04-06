import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';   // ← добавь эту строку

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>          {/* ← оборачиваем всё приложение */}
      <App />
    </AuthProvider>
  </StrictMode>
);