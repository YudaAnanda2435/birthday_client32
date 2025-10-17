import { useState, useEffect } from "react"; // useRef tidak lagi diperlukan di sini
import HTMLFlipBook from "react-pageflip";
import MainLayouts from "../Components/Fragments/MainLayouts";
import Flip3 from "../assets/img/4.png";
import Flip4 from "../assets/img/3.png";
import Flip5 from "../assets/img/5.png";
import Flip6 from "../assets/img/6.png";
import Flip7 from "../assets/img/7.png";
import Flip8 from "../assets/img/8.png";
import Flip9 from "../assets/img/9.png";
import Flip10 from "../assets/img/10.png";
import Flip11 from "../assets/img/11.png";
import Flip12 from "../assets/img/12.png";
import coverImage from "../assets/img/1.png";
import backCoverImage from "../assets/img/2.png";
import Buttons from "../Components/Elements/Buttons";
import { useNavigate } from "react-router-dom";
import { playMusic, stopMusic } from "../services/audioService";
import backgroundMusic from "/diakhir-perang.mp3";
import { photoPageTexts } from "../data";

// HAPUS: Komponen TypingText tidak diperlukan lagi
// const TypingText = ({ ... }) => { ... };

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
};

function Book() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // HAPUS: Ref untuk auto-scroll tidak diperlukan lagi
  // const scrollableContainerRef = useRef(null);

  useEffect(() => {
    playMusic(backgroundMusic);
    return () => stopMusic();
  }, []);

  const imageData = [
    { id: 3, file: Flip3 },
    { id: 4, file: Flip4 },
    { id: 5, file: Flip5 },
    { id: 6, file: Flip6 },
    { id: 7, file: Flip7 },
    { id: 8, file: Flip8 },
    { id: 9, file: Flip9 },
    { id: 10, file: Flip10 },
    { id: 11, file: Flip11 },
    { id: 12, file: Flip12 },
  ];

  const handleNavigateHome = () => navigate("/home");

  return (
    <MainLayouts background={`bg relative`}>
      <div className="pt-8 px-6 py-6 w-full md:px-14 rounded-2xl my-6 sm:my-0 bg-primary min-h-[90vh] justify-center flex flex-col md:items-center">
        <h1
          className="main-title text-2xl md:text-3xl mb-6"
          data-aos="zoom-in"
          data-aos-delay="350"
          data-aos-offset="20"
          dangerouslySetInnerHTML={{ __html: photoPageTexts.title }}
        />
        <div
          className="flipbook-wrapper"
          data-aos="zoom-in"
          data-aos-delay="550"
          data-aos-offset="20"
        >
          {/* ... Kode FlipBook Anda tetap sama ... */}
          <HTMLFlipBook
            width={300}
            height={400}
            maxShadowOpacity={0.5}
            drawShadow={true}
            showCover={!isMobile}
            size="fixed"
            className="my-flipbook"
          >
            <div className="page">
              <img src={coverImage} alt="Cover" className="page-image" />
            </div>
            {imageData.map((image, index) => (
              <div className="page" key={index}>
                <img
                  src={image.file}
                  alt={`Page ${image.id}`}
                  className="page-image"
                />
              </div>
            ))}
            <div className="page">
              <img
                src={backCoverImage}
                alt="Back Cover"
                className="page-image"
              />
            </div>
          </HTMLFlipBook>
        </div>
        <ul className="flex mt-6 justify-between w-full flex-col gap-4">
          <li
            // HAPUS: atribut ref tidak lagi diperlukan
            className="text-gray-800 flex flex-col gap-4 bg-[#DEDED1] bg-opacity-20 rounded-2xl p-4 hauto "
            data-aos="zoom-in"
            data-aos-delay="650"
          >
            {/* UBAH: Gunakan tag <p> biasa */}
            <p className="w-full lowercase font-caveat text-2xl justify-center m-auto text-center">
              {photoPageTexts.firstParagraph}
            </p>
            <p className="w-full font-caveat text-2xl text-center justify-center m-auto">
              {photoPageTexts.secondParagraph}
            </p>
          </li>
        </ul>
        <div className="mt-8 flex w-full !justify-end text-center">
          <Buttons
            className={"bg-white !text-primary "}
            onClick={handleNavigateHome}
          ></Buttons>
        </div>
      </div>
    </MainLayouts>
  );
}

export default Book;
