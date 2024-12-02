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
      className="min-h-fit flex w-full"
    >
      <SwiperSlide className="relative h-fit">
      <img className='hidden lg:block' src="/carousel/1.jpeg" alt="banner com informações do plano claro de 600 megas por 59,90 reais" />
      <img className='block lg:hidden w-full' src="/carousel/mobile/1Mobile.jpeg" alt="banner com informações do plano claro de 600 megas por 59,90 reais" />
      </SwiperSlide>

      <SwiperSlide className="relative h-fit">
        <img className='hidden lg:block' src="/carousel/2.jpeg" alt="banner com informações do plano claro pós de 30 gigas por 59,90 reais" />
        <img className='block lg:hidden w-full' src="/carousel/mobile/2Mobile.jpeg" alt="banner com informações do plano claro pós de 30 gigas por 59,90 reais" />
      </SwiperSlide>
    </Swiper>
  )
}
