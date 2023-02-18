import "./SecondFooter.css"
import {AiFillGithub} from "react-icons/ai"
import {IconContext } from "react-icons"
export default function Articles() { 
    return (
       <div className = "secfootcont"> 
        <IconContext.Provider value={{ color: "white", size: "2rem"}}>
        <a className = "F2L" href = "https://github.com/VMarrey"><AiFillGithub/></a> 
        </IconContext.Provider>
        </div>
    );
}