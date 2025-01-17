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
      className="md:h-fit flex md:w-full h-80"
    >
      <SwiperSlide className="relative md:h-fit h-full">
      <a href="" className='h-full ' target='_blank'><img className='min-h-full object-cover ' src="/carousel/1.jpeg" alt="banner com informações do plano claro de 600 megas por 59,90 reais" /></a>
      </SwiperSlide>
    </Swiper>
  )
}
