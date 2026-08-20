import ScrollWindow from "../components/scrollWithThrottle";
import RatingsTabs from "../learning/displayRatingsTabs";
import LoadOnScroll from "../learning/loadDataOnScroll";
import LoadMoreData from "../learning/loadMoreData";
import SliderPreNextReset from "../learning/SliderPreNextReset";

const About = () =>{
    return(
        <>
        <h1 className="text-3xl">
            This is About Page.
        </h1>
        <RatingsTabs />
        <SliderPreNextReset />
        {/* <ScrollWindow /> */}
        <LoadMoreData />
        {/* <LoadOnScroll /> */}
        </>
    )
}
export default About;