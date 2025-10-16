import { useState, useEffect } from "react"; // 1. Tambahkan 'useRef'
import HTMLFlipBook from "react-pageflip";
import MainLayouts from "../Components/Fragments/MainLayouts";
import Flip3 from "../assets/img/4.png"
import Flip4 from "../assets/img/3.png"
import Flip5 from "../assets/img/5.png"
import Flip6 from "../assets/img/6.png"
import Flip7 from "../assets/img/7.png"
import Flip8 from "../assets/img/8.png"
import Flip9 from "../assets/img/9.png"
import Flip10 from "../assets/img/10.png"
import Flip11 from "../assets/img/11.png"
import Flip12 from "../assets/img/12.png"
import coverImage from "../assets/img/1.png";
import backCoverImage from "../assets/img/2.png";
import Buttons from "../Components/Elements/Buttons";
import { useNavigate } from "react-router-dom";
import { playMusic, stopMusic } from "../services/audioService";

// 2. Impor file musik Anda
import backgroundMusic from "/diakhir-perang.mp3"; // <-- Ganti dengan path musik Anda

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

function Book() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

    useEffect(() => {
      playMusic(backgroundMusic);
      return () => {
        stopMusic();
      };
    }, []); 

  const imageData = [
    { id: 3, file: Flip3 },
    { id: 4, file: Flip4 },
    { id: 4, file: Flip5 },
    { id: 4, file: Flip6 },
    { id: 4, file: Flip7 },
    { id: 4, file: Flip8 },
    { id: 4, file: Flip9 },
    { id: 4, file: Flip10 },
    { id: 4, file: Flip11 },
    { id: 4, file: Flip12 },
  ];

  // 5. Buat fungsi navigasi yang bersih (opsional tapi disarankan)
  const handleNavigateHome = () => {
    // useEffect sudah akan menghentikan musik, tapi ini memastikan
    // navigasi terjadi setelahnya.
    navigate("/home");
  };

  return (
    <MainLayouts background={`bg relative`}>
      <div className="pt-8 px-6 py-6 w-full md:px-14 rounded-2xl my-6 sm:my-0 bg-primary min-h-[90vh] justify-center flex flex-col md:items-center">
        {/* ... sisa JSX Anda tidak perlu diubah ... */}
        <h1
          className="main-title mb-6"
          data-aos="zoom-in"
          data-aos-delay="350"
          data-aos-offset="20"
        >
          come see my lovee! <br />
          this ur memories!!!
        </h1>
        <div
          className="flipbook-wrapper"
          data-aos="zoom-in"
          data-aos-delay="550"
          data-aos-offset="20"
        >
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
            {imageData.map((image) => (
              <div className="page" key={image.id}>
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
          <li className="flex flex-col md:flex-row text-[#F5F5F0] justify-between gap-2">
            <p
              className="w-full lowercase font-caveat text-2xl justify-center m-auto text-center max-w-[400px]"
              data-aos="zoom-in"
              data-aos-delay="650"
              data-aos-offset="20"
            >
              Hii my love, you are getting more and more mature, I hope good
              things will always be with you, my dear, I really love you.
            </p>
            <p
              className="w-full font-caveat text-2xl text-center justify-center m-auto max-w-[500px]"
              data-aos="zoom-in"
              data-aos-delay="650"
              data-aos-offset="10"
            >
              Honey, never compare yourself to other people. You have strengths
              that others don't have. I'm proud of you. You have you.
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
