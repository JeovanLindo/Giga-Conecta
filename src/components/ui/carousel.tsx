'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


export default function Carousel() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={false}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
        type: 'progressbar'
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="min-h-[18rem] flex w-full lg:min-h-[20rem]"
    >
      <SwiperSlide className="relative min-h-[18rem] lg:min-h-[20rem]">
        <div className="min-h-[18rem] bg-no-repeat bg-cover bg-[url('/carousel/banner-1.jpg')] bg-bottom lg:min-h-[20rem]"></div>
      </SwiperSlide>

      <SwiperSlide className="relative min-h-[18rem] lg:min-h-[20rem]">
        <div className="min-h-[18rem] bg-no-repeat bg-cover bg-[url('/carousel/Banner-2.jpg')] bg-bottom lg:min-h-[20rem]"></div>
      </SwiperSlide>
    </Swiper>
  )
}
