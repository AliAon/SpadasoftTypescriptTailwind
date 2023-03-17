const Hero: React.FC = () => {
  return (
    <div className="bg-herosection bg-no-repeat	bg-cover	 -mt-20">
      <div className="container mx-auto  pl-5 pr-5">
        <div className="flex flex-wrap  lg:h-[50rem] md:h-[40rem] h-[30rem] md:items-end lg:items-center	items-center">
        <div className="lg:w-3/4 md:w-full sm:w-full w-full">
          <span className="text-white  text-xl font-montserrat">Developers</span>
            <div>
              <h2 className="lg:text-7xl md:text-6xl sm:text-5xl	text-white font-montserratlight pt-10 pb-10 text-4xl	">We Build Your Digital Appearance</h2>

              <p className="text-white  text-base font-montserrat">
                Creating a successful digital platform solution for your
                business.
              </p>
            </div>
        </div>
        <div className="lg:w-3/12 md:w-full">
            
        </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
