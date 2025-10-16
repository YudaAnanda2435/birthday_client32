const Heading = ({ aos, aosDelay, children, className }) => {
  return (
    <div className="text-center mb-3">
      <h1
        data-aos={aos}
        data-aos-delay={aosDelay}
        className={`${className}  font-bold italic  font-luckiest tracking-[8px] text-[22px] md:text-2xl lg:text-3xl 
      text-blue-400 
      text-outline-shadow-heading`}
      >
      {children}
      </h1>
    </div>
  );
};

export default Heading;
