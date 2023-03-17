import { FaTelegramPlane } from "react-icons/fa";
interface cardTwoTypes {
  title?: string,
  description?: string,
  gradient?:boolean,
  icon?:any
}
const CardOne: React.FC<cardTwoTypes> = (props) => {
  const {title,description,gradient,icon}=props
  
  return (
    <div className={`
    bg-white 
    rounded-lg
    p-10  ${gradient ? 'cardgradient shadow-md':''}`}>
      {icon}
      <h3 className={`text-2xl  	leading-normal text-${gradient?'white':'black'} font-montserratsemibold	pb-5`}>{title}</h3>
      <p className={`text-base text-${gradient?'white':'black'}`}>{description}
      </p>
    </div>
  );
};
export default CardOne;
