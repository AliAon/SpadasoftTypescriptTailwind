import CardTwo from "../../common/cards/CardTwo";

const AboutUs: React.FC = () => {
  return (
      <div className="container mx-auto p-10 pt-8 pb-8  pl-5 pr-5">
        <div className="flex flex-wrap	items-center">
        <div className="lg:w-1/2 md:w-1/2  sm:w-full w-full">
          <img alt="" src="./images/Image (6).png"/>
        </div>
        <div className="lg:w-1/2 md:w-1/2">
            <CardTwo/>
            <div className="pt-1">
            <img src="./images/music.png" alt=""/>

            </div>

        </div>
        </div>
      </div>
  );
};
export default AboutUs;
