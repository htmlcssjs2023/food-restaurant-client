import ChefService from "../../../assets/home/chef-service.jpg";

const SingleContent = () => {
  return (
    <div>
      <div
        className="hero mb-8 mt-8 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            `url(${ChefService})`,
            height:"50vh",
        }}
      >
        <div className="hero-content m-10 text-center text-neutral-content">
          <div className=" border bg-white text-[#555] p-6">
            <h1 className="mb-5 text-3xl font-bold uppercase">Bistro Boss</h1>
            <p>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nam reiciendis pariatur odio perspiciatis esse maxime molestias eveniet itaque omnis? In quia consequuntur nam quo, excepturi perspiciatis numquam aliquid veniam.
              et a id nisi.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleContent;
