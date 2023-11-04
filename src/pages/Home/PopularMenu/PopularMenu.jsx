import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [foodMenus, setFoodMenu] = useState([]);
    // console.log(foodMenus);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>setFoodMenu(data))
    }, [])
    return (
        <section>
            <SectionTitle
            subHeading={"Check it out"}
            mainHeading={"from our menu"}
            ></SectionTitle>
           <div className="grid grid-cols-2 gap-10">
           {
                foodMenus.map(item => <MenuItem  key={item._id}  item={item}
                    >
                   </MenuItem>
                )
            }
           </div>
        </section>
    );
};

export default PopularMenu;