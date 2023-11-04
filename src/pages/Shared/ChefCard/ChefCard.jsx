import ChefImg from "../../../assets/home/slide1.jpg";
const ChefCard = ({food}) => {
  const {image,name, price, recipe} = food;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="md:w-full"
            style={{height:"50vh",}}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline border-l-0 border-t-0 border-r-0 text-[#BB8506]">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
