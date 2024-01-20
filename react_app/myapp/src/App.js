import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "../src/Components/Menu/Menu.js";
import News from "./Components/News/NewsComponent.js";
import Users from "./Components/Users/UsersComponent.js";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
