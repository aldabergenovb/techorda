import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Menu from "../src/Components/Menu/Menu.js";
import FindBin from "./Pages/FindBin/FindBin.js";
import Population from "./Pages/Population/Population.js";
import UnemployedPopulation from "./Pages/UnemployedPopulation/UnemployedPopulation.js";
import News from "./Pages/News/News.js";
import DetailNews from "./Components/DetailNews/DetailNews.js";

function App() {
  return (
    <Router>
      <div>
        <Menu />

        <Routes>
          <Route path="/" element={<Navigate to="/news" />} />
          <Route path="/findbin" element={<FindBin />} />
          <Route path="/population" element={<Population />} />
          <Route path="/unemployed-pop" element={<UnemployedPopulation />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<DetailNews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
