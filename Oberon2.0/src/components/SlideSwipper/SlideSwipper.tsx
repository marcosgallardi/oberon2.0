import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";

export const SlideSwipper = () => {
  return (
    <Swiper
      spaceBetween={0} // Elimina el espacio entre slides
      slidesPerView={1} // Muestra un slide a la vez
      autoplay={{
        delay: 2000, // Cambio de slide cada 2 segundos
     
      }}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};
