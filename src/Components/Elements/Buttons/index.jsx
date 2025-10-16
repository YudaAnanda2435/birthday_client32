import { IoReturnUpBack } from "react-icons/io5";
const Buttons = ({ onClick, className, aos, aosDelay }) => {
  return (
    <div data-aos={aos} data-aos-delay={aosDelay} className="flex justify-end">
      <button
        onClick={onClick}
        className={`bg-primary cursor-pointer text-white font-bold py-2 px-4 rounded group ${className}`}
      >
        <IoReturnUpBack className="w-6 h-6 transform transition-transform duration-200 group-hover:scale-125 " />
      </button>
    </div>
  );
};

export default Buttons;
