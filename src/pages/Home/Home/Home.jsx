import ChefCard from "../../Shared/ChefCard/ChefCard";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import FeaturedImage from "../FeaturedImage/FeaturedImage";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import PopularMenu from "../PopularMenu/PopularMenu";
import SingleContent from "../SingleContent/SingleContent";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <SingleContent></SingleContent>
            <PopularMenu></PopularMenu>
            <PhoneNumber></PhoneNumber>
            <Featured></Featured>
            <FeaturedImage></FeaturedImage>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;