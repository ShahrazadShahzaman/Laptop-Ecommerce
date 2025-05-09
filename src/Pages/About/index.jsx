import PageBanner from "../../Components/PageBanner";
import ChooseUs from "./ChooseUs";
import Mission from "./Mission";
import OurStory from "./OurStory";

const AboutPage=()=>{
    return(
        <>
        <PageBanner title="About Us" subtitle="Learn more about LapShop – who we are and why we’re passionate about laptops."/>
        <Mission/>
        <OurStory/>
        <ChooseUs/>
        </>
    )
}
export default AboutPage;