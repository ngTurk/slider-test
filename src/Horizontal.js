// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

function Horizontal() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      initialSlide={3}
      lazy
    >
      <SwiperSlide>
        <img className="image" src="https://via.placeholder.com/700" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image" src="https://via.placeholder.com/700" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image" src="https://via.placeholder.com/700" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image" src="https://via.placeholder.com/700" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Horizontal;
