import PricesMovel from '@/lib/pricesmovel'

import {Smartphone} from 'lucide-react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Button } from './button';

const teste = PricesMovel.map((price)=> {
  return {
    plano: price.Plano,
    gigas: price.Gigas,
    preco: price.Preco
  }
})

export function CardNavMovel() {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        breakpoints={{
          '640': {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          '1520': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '1920': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {teste.map((teste1)=>(
          <SwiperSlide className='w-fit h-fit flex flex-row justify-center mb-10 items-center'
          key={teste1.gigas}>
            <div className='flex flex-col h-fit justify-between items-center border border-black gap-14 rounded-md w-full p-5'>
              <div className='flex gap-3 w-full flex-col'>
                  <p className='text-xs'>
                    {teste1.plano}
                  </p>
                  <p className='text-5xl font-light flex items-center gap-1'>
                    <Smartphone/> {teste1.gigas} GB
                  </p>
              </div>

              <p className='border-y border-black w-full py-1 text-center'>Apps ilimitados</p>

              <div className='flex w-full flex-col'>
                <p className='text-lg'>Por apenas:</p>
                <p className='text-xl justify-center w-full'>R$ {teste1.preco}/Mês</p>
              </div>
              <Button className='w-full'>
                <a href="">Contratar serviço fibra</a>
              </Button>
            </div>
              
          </SwiperSlide>
        ))}
        
      </Swiper>
  )
} 

export default function CardMovel({ id }: { id: string }) {
  return (
  <>
      <div id={id} className='h-fit w-full flex gap-5 flex-row font-light' >
      <CardNavMovel/> 
      </div>
  </>
)

}