import SectionTitle from "../../common/SectionTitle";

const OurPortfolio: React.FC = () => {
  return (
    <div className="container mx-auto p-10 pt-8 pb-8  pl-5 pr-5">
      <div className="flex flex-wrap	items-center">
        <SectionTitle />
      </div>
      <div className="flex flex-wrap pt-8 ">
        <div className="w-full lg:w-1/3 md:w-1/3 lg:pr-3 p-2">
          <figure className="overflow-hidden	">
            <img
              src="./images/Image (9).png"
              className="w-full	hover:scale-125	 transition-all duration-300

"
              alt=""
            />
          </figure>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/3 lg:pr-2 p-2">
          <figure className="overflow-hidden	">
            <img
              src="./images/Image (9).png"
              className="w-full	hover:scale-125	 transition-all duration-300

"
              alt=""
            />
          </figure>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/3 lg:pl-2 p-2">
          <figure className="overflow-hidden	">
            <img
              src="./images/Image (9).png"
              className="w-full	hover:scale-125	 transition-all duration-300

"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className="flex flex-wrap pt-4 pb-8">
      <div className="w-full lg:w-1/3 md:w-1/3 lg:pr-2 p-2">
          <figure className="overflow-hidden	">
            <img
              src="./images/Image (9).png"
              className="w-full	hover:scale-125	 transition-all duration-300

"
              alt=""
            />
          </figure>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/3 lg:pr-2 p-2">
          <figure className="overflow-hidden	">
            <img
              src="./images/Image (9).png"
              className="w-full	hover:scale-125	 transition-all duration-300

"
              alt=""
            />
          </figure>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/3 lg:pr-2 p-2">
          <figure className="overflow-hidden	">
            <img
              src="./images/Image (9).png"
              className="w-full	hover:scale-125	 transition-all duration-300

"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-4 ">
        <button className="bg-default-color rounded p-5 text-white hover:bg-white hover:text-[#1ab700] border-2 border-[#1ab700] hover:border-2 hover:border-[#1ab700] transition-all hover:duration-100 font-montserrat text-base">
          Get Free Quotes
        </button>
      </div>
    </div>
  );
};
export default OurPortfolio;
