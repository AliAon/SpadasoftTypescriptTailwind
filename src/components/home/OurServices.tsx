import CardOne from "../../common/cards/CardOne";
import CardTwo from "../../common/cards/CardTwo";
import { FaCheckCircle, FaDesktop, FaFacebook, FaMobile, FaVideo} from "react-icons/fa";
const OurServices: React.FC = () => {
  return (
    <div className="container mx-auto pl-5 pr-5 pt-8 pb-8">
      <div className="flex flex-wrap items-center ">
        <div className="lg:w-[45%] pr-2	 md:w-full md:mb-5 mb-5  sm:w-full w-full">
          <CardTwo />
          <div className="flex flex-wrap pb-5">
            <div className="w-1/2 p-2">
              <div className="flex items-center ">
                <FaCheckCircle color="#5e626c" />
                <span className="pl-2 text-[#5e626c] font-montserrat">
                  Experienced Professionals
                </span>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="flex items-center ">
                <FaCheckCircle color="#5e626c
" />
                <span className="pl-2 text-[#5e626c] font-montserrat">
                  Experienced Professionals
                </span>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="flex items-center ">
                <FaCheckCircle color="#5e626c
"/>
                <span className="pl-2 text-[#5e626c] font-montserrat">
                  Experienced Professionals
                </span>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="flex items-center ">
                <FaCheckCircle color="#5e626c
"/>
                <span className="pl-2 text-[#5e626c] font-montserrat">
                  Experienced Professionals
                </span>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="flex items-center ">
                <FaCheckCircle color="#5e626c
"/>
                <span className="pl-2 text-[#5e626c] font-montserrat">
                  Experienced Professionals
                </span>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="flex items-center ">
                <FaCheckCircle color="#5e626c
"/>
                <span className="pl-2 text-[#5e626c] font-montserrat">
                  Experienced Professionals
                </span>
              </div>
            </div>
          </div>
          <button className="bg-default-color rounded p-5 text-white hover:bg-white hover:text-[#1ab700] border-2 border-[#1ab700] hover:border-2 hover:border-[#1ab700] transition-all hover:duration-100 font-montserrat text-base">Get Free Quotes</button>
        </div>
        <div className="lg:w-[55%] pl-2	 md:w-full  sm:w-full w-full">
          <div className="flex flex-wrap mb-2">
            <div className="lg:w-1/2 pr-2 md:w-1/2 ">
              <CardOne
                title="Mobile App"
                gradient={true}
                icon={<FaMobile size={50 } color="white" className='pb-3'/>}
                description="Save time and energy with our in-house professionals so you can focus on what matters on your.​"
              />
            </div>
            <div className="lg:w-1/2 pl-2 md:w-1/2">
              <CardOne
                                            icon={<FaDesktop size={50 }  className='pb-3'/>}

                title="Web Development"
                description="Save time and energy with our in-house professionals so you can focus on what matters on your.​"
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 pr-2 md:w-1/2">
              <CardOne
                              icon={<FaVideo size={50 }  className='pb-3'/>}

                title="Videography"
                description="Save time and energy with our in-house professionals so you can focus on what matters on your.​"
              />{" "}
            </div>
            <div className="lg:w-1/2 pl-2 md:w-1/2">
              <CardOne
                              icon={<FaFacebook size={50 } color="white" className='pb-3'/>}

                gradient={true}
                title="Social Campaign"
                description="A small river named Duden flows by their place and supplies it with the necessary regelialia.​​"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurServices;
