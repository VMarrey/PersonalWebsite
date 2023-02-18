 import "./Articles.css"
import Article from "./Cards/Cards.js"

export default function Articles() { 
    return (
        <div className = "entirearticlescontainer"> 
            <p className = "text">Blog</p>
        <div className = "articlescontainer">
            <Article className = "Article" title = "Coming Soon" text="" link  = "/Article1" image = "https://www.vinu.edu/documents/10181/5193090/5004.jpg/28cf052a-9ecf-eeb3-1928-e8afc9b22670?version=1.0&t=1579102461703&download=true"/> 
            
         </div> 
         </div> 
    );
}