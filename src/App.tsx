import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import StoryPage from "./pages/StoryPage";
import AboutPage from "./pages/favoritePage";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./components/RegisterForm";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        {" "}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<StoryPage />} />
          <Route path="/stories/:documentId" element={<Detail />} />{" "}
          <Route path="/favorites" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registerform" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
