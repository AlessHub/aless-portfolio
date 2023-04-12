import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CardMedia } from "@mui/material";
import { useTheme } from "@emotion/react";

const ProjectCardSwiper = ({ imageUrls }) => {
  const theme = useTheme();
  return (
    <>
      <Swiper
        observer={true}
        observeParents={true}
        modules={[FreeMode, Navigation, Pagination]}
        pagination
        grabCursor={true}
        loop={true}
        parallax={true}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": theme.palette.primary.main,
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
      >
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <CardMedia
              component="img"
              alt="Card"
              image={imageUrl}
              sx={{ filter:'brightness(0.8)', height: {xs:"200px",
              sm:"300px"}}}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectCardSwiper;
