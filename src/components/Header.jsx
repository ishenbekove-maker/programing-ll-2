import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">🚀 MyStartup</div>

      <nav className="nav">
        <a href="#home">Главная</a>
        <a href="#about">О нас</a>
        <a href="#services">Сервисы</a>
        <a href="#contacts">Контакты</a>
      </nav>

      <button className="login-btn">Войти</button>
    </header>
  );
}
