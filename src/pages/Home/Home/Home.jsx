import ChefCard from "../../Shared/ChefCard/ChefCard";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import PopularMenu from "../PopularMenu/PopularMenu";
import SingleContent from "../SingleContent/SingleContent";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <SingleContent></SingleContent>
            <PopularMenu></PopularMenu>
            <PhoneNumber></PhoneNumber>
            <Featured></Featured>
            
        </div>
    );
};

export default Home;