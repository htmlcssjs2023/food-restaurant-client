import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import SingleContent from "../SingleContent/SingleContent";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <SingleContent></SingleContent>
            <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default Home;