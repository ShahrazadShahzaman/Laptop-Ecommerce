import HeroBanner from "./Banner";
import CategorySection from "./CategorySection";
import CallToAction from "./CTA";
import Testimonials from "./Testimonials";
import TopSelling from "./TopProducts";


const HomePage =()=>{
    return(
        <>
        <HeroBanner/>
        <CategorySection/>
        <TopSelling/>
        <Testimonials/>
        <CallToAction/>
        </>

    )
}
export default HomePage;