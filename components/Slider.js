import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Scrollbar } from "swiper";

import styles from "../styles/slider.module.scss";

SwiperCore.use([Autoplay, Scrollbar]);

const Slider = () => {
  return (
    <Swiper slidesPerView={1} autoplay={{ delay: 6000 }} scrollbar={{ draggable: true }} className={styles.slider}>
      <SwiperSlide className={styles.slider__block}>
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
