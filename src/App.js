// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Horizontal from './Horizontal';

function App() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      direction="vertical"
      lazy
    >
      <SwiperSlide>
        <Horizontal />
      </SwiperSlide>
      <SwiperSlide>
        <Horizontal />
      </SwiperSlide>
      <SwiperSlide>
        <Horizontal />
      </SwiperSlide>
      <SwiperSlide>
        <Horizontal />
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
