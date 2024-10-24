'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Partnership() {
  const images = [
    {
      src: '/img/content-1-img/marvel.png',
      width: 196,
      height: 112,
    },
    {
      src: '/img/content-1-img/ps5.png',
      width: 172,
      height: 115,
    },
    {
      src: '/img/content-1-img/netflix.png',
      width: 176,
      height: 112,
    },
    {
      src: '/img/content-1-img/xbox.png',
      width: 125,
      height: 104,
    },
    {
      src: '/img/content-1-img/DisneyPlus.png',
      width: 190,
      height: 112,
    },
  ];

  return (
    <div className="content-div bg-black">
      <Image
        src="/img/content-1-img/deadpool.png"
        width={397}
        height={171}
        alt="Marvel Jesus"
        className="xxs:ml-[2%] xs:ml-[10%] sm:ml-[25%] md:ml-0"
      />
      <div className="shadow-top-bottom 2xs:p-5 lg:p-20 gap-12">
        <h4 className="flex items-center justify-center lg:text-2xl text-white">
          In partnership with
        </h4>
        <div className="hidden sm:flex space-x-4 items-center justify-center mt-10 sm:ml-10">
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                alt={`Logo ${index + 1}`}
                width={image.width}
                height={image.height}
                className="object-contain m-4"
              />
            </div>
          ))}
        </div>
        {/* Mobile View - Slideshow */}
        <div className="sm:hidden 2xs:ml-28 2xs:mr-32 mt-10">
          <Swiper
            centeredSlides={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.src}
                  alt={`Logo ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  className="object-contain "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
