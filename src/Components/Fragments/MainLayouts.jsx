
const MainLayouts = ({ children, background, className }) => {
  return (
    <div className={`min-h-screen overflow-hidden py-3 md:py-5 flex items-center px-4 md:px-8 ${className} ${background}`}>
      <div className="w-full mx-auto">{children}</div>
    </div>
  );
};

export default MainLayouts;
