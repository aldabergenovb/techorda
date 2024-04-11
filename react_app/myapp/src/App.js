import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Menu from "../src/Components/Menu/Menu.jsx";
import FindBin from "./Pages/FindBin/FindBin.jsx";
import Population from "./Pages/Population/Population.jsx";
import UnemployedPopulation from "./Pages/UnemployedPopulation/UnemployedPopulation.jsx";
import News from "./Pages/News/News.jsx";
import DetailNews from "./Components/DetailNews/DetailNews.jsx";
import { LanguageContext } from "./LanguageContext.jsx";
import { Select } from "antd";
import { useState } from "react";
import { AuthProvider } from "./AuthContext.jsx";

function App() {
  const [lang, setLang] = useState("ru");

  const handleLanguageChange = () => {
    if (lang === "ru") {
      setLang("kk");
    } else {
      setLang("ru");
    }
  };
  return (
    <Router>
      <div>
        <LanguageContext.Provider value={lang}>
          <Select
            defaultValue="ru"
            style={{ width: 120 }}
            onChange={handleLanguageChange}
            options={[
              { value: "ru", label: "Русский" },
              { value: "kk", label: "Казахский" },
            ]}
          ></Select>

          <Menu />

          <Routes>
            <Route path="/" element={<Navigate to="/news" />} />
            <Route path="/findbin" element={<FindBin />} />
            <Route path="/population" element={<Population />} />
            <Route path="/unemployed-pop" element={<UnemployedPopulation />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<DetailNews />} />
            <Route path="/login" element={<AuthProvider />} />
          </Routes>
        </LanguageContext.Provider>
      </div>
    </Router>
  );
}

export default App;
