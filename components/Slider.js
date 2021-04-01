import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Scrollbar } from "swiper";

SwiperCore.use([Autoplay, Scrollbar]);

const Slider = () => {
  return (
    <Swiper slidesPerView={1} autoplay={{ delay: 3000 }} scrollbar={{ draggable: true }}>
      <SwiperSlide>
        <h1>Slide1</h1>
      </SwiperSlide>
      <SwiperSlide>
        <p>Slide2</p>
      </SwiperSlide>
      <SwiperSlide>
        <p>Slide3</p>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
