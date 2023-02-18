import "./Project.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cards from "./Card/Card.js"

export default function ProjectsPage(){ 
    return ( 
        <div className = "entireprojectscontainer"> 
            <div className = "text45">Projects</div>
         <div className = "projectscontainer"> 
                 <Cards className = "Article" title = "Coming Soon" text="" link  = "/Article1" image = "https://www.vinu.edu/documents/10181/5193090/5004.jpg/28cf052a-9ecf-eeb3-1928-e8afc9b22670?version=1.0&t=1579102461703&download=true"/> 
               </div> 
        </div> 
    ); 

}