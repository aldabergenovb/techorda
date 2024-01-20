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
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/about">About us</Link>
        </li>
        <li className="menu-item">
          <Link to="/users">Users</Link>
        </li>
        <li className="menu-item">
          <Link to="/news">News</Link>
        </li>
        <li className="menu-item">
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
