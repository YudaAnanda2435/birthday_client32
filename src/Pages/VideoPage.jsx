import { useNavigate } from "react-router-dom";
import MainLayouts from "../Components/Fragments/MainLayouts";
import Buttons from "../Components/Elements/Buttons";
import Heading from "../Components/Fragments/Heading";
import Loading from "../assets/img/adit.jpg";
import { IoMdMusicalNotes } from "react-icons/io";

const VideoPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayouts
      className={"bg-primary !py-5 sm:!px-8"}
      background={`bg-primary`}
    >
      <div className="bg-white flex-col relative rounded-xl min-h-[90vh] shadow-xl flex  overflow-hidden mx-auto">
        <div className="p-6 md:p-8 flex flex-col m-aut justify-between h-full items-center">
          <Heading className={`pb-16`} aos={"zoom-in"} aosDelay={200}>
            Music
          </Heading>
          <div data-aos="zoom-in" data-aos-delay="400">
            <img
              className="rounded-4xl transform transition-transform duration-300 ease-in-out hover:scale-105 w-full max-w-[400px]"
              src={Loading}
              alt=""
            />
          </div>

          <div className="inline-block transform transition-transform duration-500 ease-in-out hover:scale-105">
            <a
              data-aos="zoom-in"
              data-aos-delay="500"
              href="https://open.spotify.com/playlist/4qxFnBUn2JSSFWqMYp6MSs?si=UlOJmqDcTCWHTVXdR6QFWw&pt=f2d811ede8e4df67a1ac40586453a97d&pi=Kqk2y9viQIaV3"
              target="blank"
              className="py-4 w-fit mx-auto flex flex-row gap-2 items-center px-6 mt-12 text-white font-inter bg-primary rounded-4xl cursor-pointer"
            >
              play music on spotify
              <IoMdMusicalNotes />
            </a>
            <p className="mt-4 w-full max-w-[600px] text-center mb-16 font-caveat text-[20px]">
              maybe someday, when you play these songs again, you’ll feel what i
              felt and remember how it was to be loved by me.
            </p>
          </div>
        </div>

        <div className="absolute bottom-5 right-[2%] flex w-full !justify-end text-center">
          <Buttons onClick={() => navigate("/home")}></Buttons>
        </div>
      </div>
    </MainLayouts>
  );
};

export default VideoPage;
