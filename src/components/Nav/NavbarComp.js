
import "./NavbarComp.css"; 
import {AiOutlineHome} from "react-icons/ai"
import {RiArticleFill} from "react-icons/ri"
import {IconContext } from "react-icons"
import {AiFillProject} from "react-icons/ai"
function BasicExample() {
  return (
    <div className = "container"> 
      <IconContext.Provider value={{ color: "white", size: "1.5rem"}}>
        <a className = "link2" href = "/"><AiOutlineHome/></a> 
        <a className = "link2 p1" href = "/#/Projects"><AiFillProject /></a> 
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "grey", size: "1.5rem"}}>
        <a className = "link3"> <RiArticleFill/></a> 
        </IconContext.Provider>
    </div> 
  );
}

export default BasicExample;