const Header = ({ aos, aosDelay }) => {
  return (
    <div className="text-center mb-10">
      <h1
        data-aos={aos}
        data-aos-delay={aosDelay}
        className="  font-bold italic mb-2 font-luckiest tracking-[8px] text-2xl md:text-3xl lg:text-4xl 
      text-blue-400 
      text-outline-shadow"
      >
        mm I’ve got some special surprises waiting for you, but you get to
        choose where to start!
      </h1>
      <p
        data-aos={aos}
        data-aos-delay={aosDelay}
        className="tracking-widest italic font-luckiest text-blue-600"
      >
        which one catches your heart?
      </p>
    </div>
  );
};

export default Header;
