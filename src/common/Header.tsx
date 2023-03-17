const Header = () => {
  return (
    <header
      style={{
        background: "rgb(0 0 0 / 24%)",
      }}
      className="p-1 relative z-10 "
    >
      <div className="container mx-auto">
        <div className="flex items-center flex-wrap		">
          <div className="lg:w-1/5 md:w-full sm:w-1/2">
            <img alt="logo" src="./images/logo/logo (2).png" />
          </div>
          <div className="lg:w-3/5 md:w-full sm:w-1/2  lg:block sm:hidden md:hidden hidden">
            <ul className="flex items-center 		justify-evenly		">
              <li className="text-white text-base font-montserrat	">Home</li>
              <li className="text-white text-base font-montserrat	">About</li>
              <li className="text-white text-base font-montserrat	">Services</li>
              <li className="text-white text-base font-montserrat	">Portfolio</li>
              <li className="text-white text-base font-montserrat	">Blog</li>
              <li className="text-white text-base font-montserrat	">Our Team</li>
              <li className="text-white text-base font-montserrat	">Career</li>
              <li className="text-white text-base font-montserrat	">Contact</li>
            </ul>
          </div>
          <div className="lg:w-1/5 text-right">
            <button className="bg-green-800 float-right	 hidden lg:block md:hidden  text-white py-2 px-4 rounded font-montserrat">Hope On Call</button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
