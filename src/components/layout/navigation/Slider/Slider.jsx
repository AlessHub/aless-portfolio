

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Autoplay } from "swiper";
import { Container } from "@mui/system";
import "swiper/css";
import "swiper/css/pagination";
import sliderinfo from '../../../../utils/sliderinfo.json';
import Item from "./Item";
import 'swiper/css/navigation';

const AppSlider = () => {
  

  return (
    <Container sx={{}}>
      <Swiper
        observer={true}
        observeParents={true}
        modules={[FreeMode, Navigation, Pagination, Autoplay]}
        grabCursor={true}
        loop={true}
        parallax={true}
        navigation
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
             {
                 sliderinfo.map( (item, i) => <SwiperSlide><Item key={item.id} item={item} /></SwiperSlide> )
             }
      </Swiper>
    </Container>
  );
};

export default AppSlider;