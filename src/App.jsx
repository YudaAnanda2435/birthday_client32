import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./Pages/HomePage";
import Book from "./Pages/PhotoPage";
import Cake from "./Pages/Cake";
import MessagePage from "./Pages/MessagePage";
import VideoPage from "./Pages/VideoPage";
import WelcomePage from "./Pages/WelcomePage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true, // animasi hanya jalan sekali
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/photos" element={<Book />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
