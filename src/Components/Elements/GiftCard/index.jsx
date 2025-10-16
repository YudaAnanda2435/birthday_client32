import { useNavigate } from "react-router-dom";

const GiftCard = ({ title, img, redirectPath, aos, aosDelay }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectPath);
  };

  return (
    <div data-aos={aos} data-aos-delay={aosDelay}>
      <div
        className="group bg-primary w-full rounded-lg py-4 px-6 sm:py-6 sm:px-8 lg:py-8 lg:px-14 flex flex-col items-center justify-center cursor-pointer shadow-lg"
        onClick={handleClick}
      >
        <div className="">
          <img
            src={img}
            alt={title}
            className="w-32 h-32 mb-4 object-contain transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
