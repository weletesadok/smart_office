import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Navbar from "./Navbar"
import News from "./News";
import NewsMain from "./NewsMain";

export default ()=>{
    return (
        <>
        <Navbar />
        <NewsMain />
        <Gallery />
        <Hero />
        {/* <News /> */}
        <Footer />
        </>
    )
}