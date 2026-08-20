import DisplayClock from "../learning/clock";
import ConditionalComp from "../components/HOC";
import HOCupdateCompnt from "../components/LearnHOC";
import LearnPortal from "../components/learnPortal";
import MapFilterUseState from "../learning/mapFilterUseState";
import SearchWithDebounce from "../components/SearchWithDebounce";
import Todo from "../learning/Todo";
import Counter from "../learning/counterStart-Stop-Resume";
import SearchCountry from "../learning/searchCountry";
import CityListModal from "../learning/cityList-Modal";
import DisplayMeals from "../learning/displayMeal";
import ArrayOperation from "../learning/arrayWithUseArray";
import SquareOfNumber from "../components/squareOfNumber";
import UserByNameRole from "../learning/user-Role-Name";

const Home = () =>{
    return(
        <>
            {/* <SquareOfNumber /> */}
            {/* <DisplayClock /> */}
            <h1 className="text-2xl">
                This is Home Page.
            </h1>
            <SearchWithDebounce />
            <SearchCountry />
            <br/>
            <HOCupdateCompnt />
            <hr/>
            <ConditionalComp />
            <hr/>
            {/* <LearnPortal /> */}
            <MapFilterUseState />
            <Todo />
            <Counter/>
            <CityListModal />
            <DisplayMeals />
            <hr></hr>
            <ArrayOperation />
            <UserByNameRole />
        </>
        
    )
}
export default Home;