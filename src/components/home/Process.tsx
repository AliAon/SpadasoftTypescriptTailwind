import { FaDatabase, FaLaptop, FaMobile } from "react-icons/fa";
import CardOne from "../../common/cards/CardOne";

const Process: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex z-10 relative flex-wrap lg:-mt-40 -mt-20">
        <div className="lg:w-1/3 md:w-1/2 lg:pr-3 pb-3 p-2 w-full ">
          <CardOne
            title="Strategic & Planning"
            icon={<FaDatabase size={50} className='pb-3'/>}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </div>
        <div className="lg:w-1/3 lg:pr-3 md:w-1/2 pb-3 p-2 w-full">
          <CardOne
                      icon={<FaLaptop size={50} className='pb-3'/>}
            title="Design & Development"
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </div>
        <div className="lg:w-1/3  pb-3 p-2  w-full">
          <CardOne
                                icon={<FaLaptop size={50} className='pb-3'/>}

            title="Strategic & Planning"
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </div>
      </div>
    </div>
  );
};
export default Process;
