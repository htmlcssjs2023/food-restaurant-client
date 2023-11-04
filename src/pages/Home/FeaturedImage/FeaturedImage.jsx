import bgImage from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const FeaturedImage = () => {
  return (
    <section className="mb-20">
      <div>
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            height: "90vh",
          }}
          className="p-20 bg-no-repeat bg-cover bg-center bg-fixed gap-3 bg-black bg-opacity-10"
        >
          <SectionTitle
            subHeading={"Check it out"}
            mainHeading={"form our menu"}
          ></SectionTitle>
          <div className="flex justify-center items-center">
            <div className="flex md:w-10/12 justify-center items-center gap-8">
              <figure>
                <img
                  src={bgImage}
                  style={{ width: "100%" }}
                  alt="image"
                />
              </figure>
              <div className="text-white p-4">
                <h2 className="card-title">March 20, 2023</h2>
                <h3 className="card-title">WHERE CAN I GET SOME?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <div className="card-actions">
                  <button className="btn btn-outline border-l-0 border-t-0 border-r-0 text-white mt-10 border-b-4">
                    read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
