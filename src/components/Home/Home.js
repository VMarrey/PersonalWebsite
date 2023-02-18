import "./Home.css"
import Footer from "./Footer/Footer.js"
import HeroSlider from "./SlideShow/Slideshow.js"
import SecondFooter from "./SecondFooter/SecondFooter.js"
export default function Home() { 
    return ( 
        <div className = "homecontainer"> 
            <HeroSlider className = "images"/>
            <Footer className = "footercomponent"/> 
            <SecondFooter /> 
        </div> 
    ); 
}