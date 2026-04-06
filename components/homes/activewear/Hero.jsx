// 
"use client";

import { useContextElement } from "@/context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";

export default function Hero() {
  const { homebanner } = useContextElement();


  if (!homebanner.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="slider-padding">
      <div className="tf-slideshow slider-default slider-effect-fade slider-position slider-nav-sw slider-radius-1">
        <Swiper
          spaceBetween={15}
          className="swiper tf-sw-slideshow"
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true, el: ".spd9" }}
          navigation={{ prevEl: ".snbp4", nextEl: ".snbn4" }}
        >
          {homebanner.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="wrap-slider slider-group">
                
                {/* If API returns single image */}
                <Image
                  alt={slide.V_ImageAlt}
                  src={slide.V_DigitalFile}
                  width={910}
                  height={780}
                />

                {/* If API returns multiple images */}
                {/* slide.images.map(...) */}

                <div className="box-content">
                  <div className="content-slider">
                    <h1 className="text-white">{slide.title}</h1>
                    <p className="text-white">{slide.description}</p>

                    <Link href="/shop-default-grid" className="tf-btn btn-fill btn-white">
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}