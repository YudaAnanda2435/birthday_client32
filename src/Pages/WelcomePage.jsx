import { useNavigate } from "react-router-dom";
import { playMusic } from "../services/audioService";
import homeMusic from "/bruno.mp3"; // Impor musik untuk home

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    playMusic(homeMusic); // Putar musik home
    navigate("/home", { replace: true });
  };

  return (
    // ... JSX Anda untuk WelcomePage tetap sama ...
    <div className="bg-primary min-h-screen flex items-center justify-center text-center text-white p-4">
      <div data-aos="zoom-in">
        <h1 className="text-4xl md:text-7xl font-inter font-bold mb-4">
          I made something just for you… click to find out!!
        </h1>
        <p className="text-lg cursor-pointer md:text-xl mb-8 animate-pulse">
          ( may cause smiling )
        </p>
        <button
          onClick={handleEnter}
          className="bg-white text-primary font-bold py-3 px-10 rounded-full text-lg transform hover:scale-110 transition-transform duration-300"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
