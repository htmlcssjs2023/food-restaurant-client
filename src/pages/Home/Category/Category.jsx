import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import Slide1 from "../../../assets/home/slide1.jpg";
import Slide2 from "../../../assets/home/slide2.jpg";
import Slide3 from "../../../assets/home/slide3.jpg";
import Slide4 from "../../../assets/home/slide4.jpg";
import Slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="pt-4 pb-4 mb-4">
        <SectionTitle
        subHeading={"From 10.00 am to 10.00 pm"}
        mainHeading={"online order"}
        ></SectionTitle>
        
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slide1} alt="slider" />
          <h3 className="text-4xl  font-bold -mt-16 text-center text-[#ccc]">
            Salat
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="slider" />
          <h3 className="text-4xl  font-bold -mt-16 text-center text-[#ccc]">
            Salat
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt="slider" />
          <h3 className="text-4xl  font-bold -mt-16 text-center text-[#ccc]">
            Salat
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} alt="slider" />
          <h3 className="text-4xl font-bold -mt-16 text-center text-[#ccc]">
            Salat
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} alt="slider" />
          <h3 className="text-4xl font-bold -mt-16 text-center text-[#ccc]">
            Salat
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} alt="slider" />
          <h3 className="text-4xl  font-bold -mt-16 text-center text-[#ccc]">
            Salat
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Category;
