"use client"
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import * as styles from "../components/GalleryCarousel.module.css"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/grid"
import { Grid } from "swiper/modules"
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules"

const GalleryCarousel = () => {
  return (
    <>
      <Swiper
        // cssMode={true}
        // navigation={true}
        // // pagination={true}
        // mousewheel={true}
        // keyboard={true}
        // modules={[Navigation, Mousewheel, Keyboard]}
        // className={"mySwiper"}
        slidesPerView={5}
        grid={{
          rows: 2,
        }}
        // navigation = {true}
        keyboard={true}
        mousewheel={true}
        spaceBetween={30}
        modules={[Grid, Navigation, Keyboard, Mousewheel]}
        className="mySwiper gallerySwiper"
      >
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
        <SwiperSlide className="gallerySlide"></SwiperSlide>
      </Swiper>
    </>
  )
}

export default GalleryCarousel

// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/grid';
// import { Grid } from 'swiper/modules';
// import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

// const GalleryCarousel = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Function to fetch images from the API
//     const fetchImages = async () => {
//       try {
//         const response = await fetch('https://bits-oasis.org/2023/main/registrations/gallery/');
//         const data = await response.json();
//         setImages(data); // Assuming the API response is an array of image URLs
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     // Call the fetchImages function
//     fetchImages();
//   }, []); // Empty dependency array ensures useEffect runs once after initial render

//   return (
//     <>
//       <Swiper
//         slidesPerView={5}
//         grid={{
//           rows: 2,
//         }}
//         spaceBetween={30}
//         modules={[Grid, Navigation, Keyboard, Mousewheel]}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img src={image.picture} alt={`Slide ${index + 1}`} width={200} height={200}/>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// export default GalleryCarousel;
