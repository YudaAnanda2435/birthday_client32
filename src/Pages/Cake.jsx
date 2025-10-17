import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import Panda1 from "../assets/img/bear.png";
import MainLayouts from "../Components/Fragments/MainLayouts";
import Buttons from "../Components/Elements/Buttons";
import { useNavigate } from "react-router-dom";

// 1. Impor fungsi dari audioService dan file musiknya
import { playMusic, stopMusic } from "../services/audioService";
import hbdSong from "/nothing.mp3";

const initialCandles = [
  { id: 1, left: 100, top: -20, out: false },
  { id: 2, left: 125, top: -25, out: false },
  { id: 3, left: 150, top: -20, out: false },
];

const wishes = [
  "i wish love wraps around you the way you’ve wrapped yours around me",
  "i wish your mind finds rest, your heart finds calm, and your days feel lighter",
  "i pray for your dreams to grow bigger and your worries to grow smaller",
  "i pray the weight you carry becomes lighter with love and time",
];

export default function Cake() {
  const navigate = useNavigate();
  const cakeRef = useRef(null);
  const [candles, setCandles] = useState(initialCandles);
  // HAPUS: audioRef lokal tidak diperlukan lagi
  // const audioRef = useRef(new Audio(hbdSong));
  const [showBanner, setShowBanner] = useState(false);
  const [showPandas, setShowPandas] = useState(false);
  const [bannerStep, setBannerStep] = useState(1);

  // 2. Gunakan useEffect untuk memutar musik secara otomatis
  useEffect(() => {
    // Saat halaman dibuka, putar musiknya
    playMusic(hbdSong);

    // Cleanup function: Berjalan saat Anda meninggalkan halaman
    return () => {
      stopMusic();
    };
  }, []); // Array kosong memastikan ini berjalan sekali saat masuk dan keluar

  const launchCustomConfetti = () => {
    const duration = 5 * 1000;
    const end = Date.now() + duration;
    const myEmojis = ["💖", "🎂", "🎉", "✨"];
    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        shapes: myEmojis,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        shapes: myEmojis,
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleCelebration = () => {
    setCandles((prev) => prev.map((c) => ({ ...c, out: true })));
    launchCustomConfetti();
    // HAPUS: Pemutaran musik sudah tidak dilakukan di sini lagi
    // audioRef.current.play();
    setShowPandas(true);
    setBannerStep(1);
    setTimeout(() => {
      setShowBanner(true);
    }, 50);
  };

  const handleNavigateHome = () => {
    // Fungsi cleanup di useEffect sudah akan menghentikan musik
    navigate("/home");
  };

  const handleNextWish = () => {
    setBannerStep(2);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <MainLayouts background={"bg-primary"}>
      <div className="px-6 relative py-20 md:py-6 w-full md:px-14 rounded-2xl my-6 sm:my-0 bg-white min-h-[90vh] flex flex-col md:items-center justify-center">
        {showBanner && (
          <div className="birthday-banner">
            <button onClick={handleCloseBanner} className="banner-close-button">
              &times;
            </button>
            {bannerStep === 1 ? (
              <div className="text-center">
                <p className="py-5 text-2xl md:text-4xl font-bold">
                  all my wishes, for you
                </p>
                <button onClick={handleNextWish} className="wish-next-button">
                  Next →
                </button>
              </div>
            ) : (
              <div className="text-left p-6 md:p-8">
                <ul className="space-y-3 list-disc list-inside">
                  {wishes.map((wish, index) => (
                    <li
                      key={index}
                      className="text-base md:text-xl font-normal"
                    >
                      {wish}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        <div
          className="text-2xl w-fit mx-auto text-center md:text-3xl font-bold text-gray-100 bg-[#524b47] px-4 py-2 rounded-lg shadow mb-6 border-2 border-pink-200"
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-offset="20"
        >
          a quite wish. a loud love
        </div>
        <div className="flex flex-col relative md:flex-row items-center gap-8 md:gap-12">
          {showPandas && (
            <img
              src={Panda1}
              alt="Panda GIF"
              className=" relative !right-10 md:right-8 w-32 md:w-44 hidden md:block"
            />
          )}
          <div
            ref={cakeRef}
            className="relative w-[250px] h-[200px]"
            data-aos="fade-up"
            data-aos-delay="850"
            data-aos-offset="20"
          >
            <div className="absolute w-[270px] h-[110px] -bottom-2 -left-2 bg-gray-300 rounded-full shadow-[0_5px_40px_rgba(0,0,0,0.5)]" />
            <div className="layer-top cake-layer" />
            <div className="layer-middle cake-layer" />
            <div className="layer-bottom cake-layer" />
            <div className="icing" />
            <div className="drip drip1" />
            <div className="drip drip2" />
            <div className="drip drip3" />
            {candles.map((candle) => (
              <div
                key={candle.id}
                className={`absolute w-3 h-9 bg-red-900 rounded-t-lg candle`}
                style={{ left: candle.left, top: candle.top }}
              >
                {!candle.out && <div className="flame" />}
              </div>
            ))}
          </div>
          {showPandas && (
            <div className="flex flex-row gap-6">
              <img src={Panda1} alt="Panda GIF" className="w-32 md:w-44" />
              <img
                src={Panda1}
                alt="Panda GIF"
                className="w-32 md:w-44 md:hidden"
              />
            </div>
          )}
        </div>
        {!showBanner && candles.length > 0 && (
          <button
            onClick={handleCelebration}
            className="blow-button w-fit mx-auto"
          >
            Tiup Lilin! 🎂
          </button>
        )}
        <div className="mt-8 absolute bottom-5 right-[2%] flex w-full !justify-end text-center">
          <Buttons onClick={handleNavigateHome}></Buttons>
        </div>
      </div>
    </MainLayouts>
  );
}
