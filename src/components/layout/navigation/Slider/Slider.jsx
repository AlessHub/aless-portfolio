import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Autoplay } from "swiper";
import { Container } from "@mui/system";
import "swiper/css";
import "swiper/css/pagination";
import sliderinfo from "../../../../utils/sliderinfo.json";
import Item from "./Item";
import "swiper/css/navigation";

const AppSlider = () => {
  return (
    <Container sx={{ maxWidth: "600px !important", mb: 5 }}>
      <Swiper
        observer={true}
        observeParents={true}
        modules={[FreeMode, Navigation, Pagination, Autoplay]}
        grabCursor={true}
        loop={true}
        parallax={true}
        autoplay={{
          delay: 500,
        }}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
      >
        {sliderinfo.map((item, i) => (
          <SwiperSlide key={item.id}>
            <Item item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default AppSlider;
