import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefCard from "../../Shared/ChefCard/ChefCard";

const Featured = () => {
    const [foodDetails, setFood] = useState([]);
    console.log(foodDetails);

    useEffect(()=>{
        fetch('food.json')
        .then(res => res.json())
        .then(data =>setFood(data));
    },[])
    return (
        <section>
            <SectionTitle
                subHeading={"should try"}
                mainHeading={"chef recomends"}
            ></SectionTitle>
            <div className="grid grid-cols-3 grid-rows-1">
              {
                foodDetails.map(food => <ChefCard key={food._id} food={food}></ChefCard>)
              }
            </div>

        </section>
    );
};

export default Featured;