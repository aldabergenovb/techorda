import "./menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  const logo =
    "https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png";
  return (
    <div className="menu-container">
      <img className="logo" src={logo} alt="LogoSite" />
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/">Главная</Link>
        </li>
        <li className="menu-item">
          <Link to="/about">О городе</Link>
        </li>
        <li className="menu-item">
          <Link to="/users">Пользователи</Link>
        </li>
        <li className="menu-item">
          <Link to="/news">Новости</Link>
        </li>
        <li className="menu-item">
          <Link to="/smi">СМИ</Link>
        </li>
        <li className="menu-item">
          <Link to="/">Контакты</Link>
        </li>
        <li className="menu-item">
          <Link to="/filmlist">Список фильмов</Link>
        </li>
        <li className="menu-item">
          <Link to="/products">Список продуктов</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
