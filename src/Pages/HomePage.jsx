import { useEffect } from "react"; // 1. Impor useEffect
import Header from "../Components/Fragments/Header";
import GiftCard from "../Components/Elements/GiftCard/index";
import Memories from "../assets/img/camera.png";
import MainLayouts from "../Components/Fragments/MainLayouts";
import Cake from "../assets/img/ice-cream.png";
import Message from "../assets/img/chating.png";
import Talk from "../assets/img/music.png";
import { playMusic, stopMusic } from "../services/audioService"; // 2. Impor fungsi audio
import homeMusic from "/bruno.mp3"; // 3. Impor musik home

const Home = () => {
  // 4. Tambahkan useEffect untuk mengelola musik Home
  useEffect(() => {
    playMusic(homeMusic); // Putar musik home saat halaman ini aktif

    // Cleanup: Hentikan musik saat meninggalkan halaman Home
    return () => {
      stopMusic();
    };
  }, []);

  return (
    <MainLayouts background={`bg-primary`}>
      <div className="px-6 py-6 w-full md:px-14 rounded-2xl my-6 sm:my-0 bg-white min-h-[90vh] flex flex-col md:items-center justify-center">
        <Header aos={`zoom-in`} aosDelay={`0`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <GiftCard
            img={Memories}
            redirectPath="/photos"
            aos={`fade-right`}
            aosDelay={`600`}
          />
          <GiftCard
            img={Cake}
            redirectPath="/cake"
            aos={`fade-right`}
            aosDelay={`500`}
          />
          <GiftCard
            img={Message}
            redirectPath="/message"
            aos={`fade-right`}
            aosDelay={`400`}
          />
          <GiftCard
            img={Talk}
            redirectPath="/video"
            aos={`fade-right`}
            aosDelay={`300`}
          />
        </div>
      </div>
    </MainLayouts>
  );
};

export default Home;
