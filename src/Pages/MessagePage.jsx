import { useEffect } from "react"; // HANYA butuh useEffect
import { useNavigate } from "react-router-dom";
import MainLayouts from "../Components/Fragments/MainLayouts";
// import contoh1 from "../assets/img/fotoMessage1.jpg";
import contoh2 from "../assets/img/fotoMessage2.jpg";
import contoh3 from "../assets/img/fotoMessage3.jpg";
import Buttons from "../Components/Elements/Buttons";
import Heading from "../Components/Fragments/Heading";

// 1. Impor fungsi dari audioService.js
import { playMusic, stopMusic } from "../services/audioService";
// 2. Impor musik spesifik untuk halaman ini
import backgroundMusic from "/wishlist.mp3";

const MessagePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    playMusic(backgroundMusic);
    return () => {
      stopMusic();
    };
  }, []); 

  return (
    <MainLayouts background={`bg-primary`}>
      <div className="px-6 h-auto py-6 w-full md:px-14 rounded-2xl my-6 sm:my-0 bg-white min-h-[90vh] flex flex-col md:items-center justify-center">
        <div className="p-0 sm:p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Sisi Kiri - Gambar */}
            <div className=" flex flex-col ">
              {/* <div
                className="bg-primary p-2 pb-0 md:px-2 md:pt-2 flex items-center justify-center"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-offset="50"
              >
                <img
                  className="w-full max-w-auto md:max-w-[330px] object-cover"
                  src={contoh1}
                  alt=""
                />
              </div> */}
              <div
                className="bg-primary p-2 pb-0 md:px-2 md:pt-2 flex items-center justify-center group"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-offset="50"
              >
                <img
                  className="w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105 max-w-auto md:max-w-[330px] object-cover"
                  src={contoh2}
                  alt=""
                />
              </div>
              <div
                className="bg-primary p-2 flex items-center justify-center group"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-offset="50"
              >
                <img
                  className="w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105 max-w-auto md:max-w-[330px] object-cover"
                  src={contoh3}
                  alt=""
                />
              </div>
            </div>

            {/* Sisi Kanan - Pesan */}
            <div className="md:w-2/3">
              <div className=" rounded-r-lg">
                <Heading
                  aos={"fade-up"}
                  aosDelay={"200"}
                  className={"text-start"}
                >
                  HAPPY BIRTHDAY, LOVE!
                </Heading>
                <p
                  className="text-lg mb-4 leading-relaxed font-inter"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Happy birthday to the man who makes my heart feel at home,
                  Fariz Pradipta Hadrianto ♡
                </p>
                <p
                  className="mb-4 text-[16px] md:text-[19px] leading-relaxed font-inter"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  I don’t even know where to start because you’ve become such a
                  big part of my heart that words never feel enough. You make
                  everything feel lighter, softer, and so much more beautiful
                  just by being in it.
                </p>
                <p
                  className="mb-4 text-[16px] md:text-[19px] leading-relaxed font-inter"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  I’m so proud of you, of the person you are, and of everything
                  you’re becoming. I know how hard you’ve been working, chasing
                  your dreams, carrying so many responsibilities, and still
                  putting your heart into building something real for us. Thank
                  you for never giving up, for always trying, and for choosing
                  to love me through it all. I feel so lucky to walk through
                  life with someone like you.
                </p>
                <p
                  className="mb-4 text-[16px] md:text-[19px] leading-relaxed font-inter"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  You make everything feel safe and calm, and I want you to feel
                  the same when you’re with me. With me, you will always have a
                  home, a place where you can rest, breathe, and just be
                  yourself. I want to be your calm when the world feels heavy,
                  your peace after long days, and the person who stays when
                  things get hard.
                </p>
                <p
                  className="mb-4 text-[16px] md:text-[19px] leading-relaxed font-inter"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  data-aos-offset="50"
                >
                  I will always be here for you in every version of your life.
                  On your best days and on your tired ones. When everything
                  feels right and when it doesn’t. I will always be here,
                  cheering for you, believing in you, and loving you quietly in
                  every way I know how.
                </p>
                <p
                  className="mb-4 text-[16px] md:text-[19px] leading-relaxed font-inter"
                  data-aos="fade-up"
                  data-aos-delay="800"
                  data-aos-offset="50"
                >
                  I pray that life becomes gentler with you and that all the
                  things you have been working so hard for start to fall into
                  place. I hope this year brings you peace, success, and
                  happiness in ways that feel real and lasting. And for us, I
                  pray that we always find our way back to each other no matter
                  where life takes us. I hope everything we are fighting for
                  becomes real someday, a home, a life, a forever. ♡
                </p>
                <p
                  className="mb-4 text-[16px] md:text-[19px] leading-relaxed font-inter"
                  data-aos="fade-up"
                  data-aos-delay="850"
                  data-aos-offset="20"
                >
                  You are my favorite blessing, my safe place, and my greatest
                  peace. You have brought so much light into my life just by
                  being you. Thank you for choosing me, for loving me, and for
                  letting me love you in return.
                </p>
                <p
                  className="mb-4 text-[16px] md:text-[19px] leading-relaxed font-inter"
                  data-aos="fade-up"
                  data-aos-delay="850"
                  data-aos-offset="20"
                >
                  Happy birthday, my love. You deserve the whole world, and I
                  will keep reminding you of that every day in every way. 🤍
                </p>
                <p
                  className="mb-4 text-[16px] md:text-[19px] leading-relaxed font-inter"
                  data-aos="fade-up"
                  data-aos-delay="850"
                  data-aos-offset="20"
                >
                  Forever and always, <br /> Fasya Aurellya ♡
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Buttons onClick={() => navigate("/home")}></Buttons>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default MessagePage;
