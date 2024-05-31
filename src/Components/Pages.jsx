import Aboutus from "./Aboutus"
// import Career from "./Career"
import Contact from "./Contact"
import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
import Service from "./Service"


function Pages() {
    return (
        <div className="w-full relative flex flex-col font-serif h-full">
            <Navbar />
           
            <div  className="h-full w-full">
                <Home/>
                <Service />
                <Aboutus />
                <Contact />
                <Footer/>
            </div>
            
            
         
        </div>
    )
}

export default Pages;
