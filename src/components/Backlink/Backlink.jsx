import { LinkBackStyle, BtnBack} from "./BackLink.styled";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const BackLink = ({href}) => {
    return (

    <BtnBack type="submit"> 
        <AiOutlineArrowLeft  /><LinkBackStyle to={href}>Go back</LinkBackStyle>
    </BtnBack>
  )
}