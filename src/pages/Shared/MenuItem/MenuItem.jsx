const MenuItem = ({item}) => {
    const {image,name, price, recipe} = item;
    console.log(image);
  return (
    <div>
      <div className="flex m-4">
        <img src={image} style={{width:"118px", height:"104px", borderRadius:"0 200px 200px 200px"}} alt="" />
        <div className="p-4">
          <p>{name} ---------- </p>
          <p>
           {recipe}
          </p>
        </div>
        <div>
          <span className="text-yellow-500 font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
