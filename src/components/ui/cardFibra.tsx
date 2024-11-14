import PricesFibra from '@/lib/pricesfibra'
import { cn } from '@/lib/utils';

import {Wifi} from 'lucide-react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Button } from './button';


const teste = PricesFibra.map((price)=> {
  return {
    plano: price.Plano,
    megas: price.Megas,
    preco: price.Preco,
    bytes: price.Bytes,
  }
})

export function CardNavFibra() {
  return (
    <Swiper
        className=''
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '1920': {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {teste.map((teste1)=>(
          <SwiperSlide className='cursor-grab active:cursor-grabbing w-fit h-fit flex flex-row justify-center mb-10 items-center'
          key={teste1.megas}>
            <div className='flex flex-col h-fit justify-between items-center border border-black gap-14 rounded-md w-full p-5'>
              <div className='flex gap-3 w-full h-fit flex-col'>
                  <p className='text-xs'>
                    {teste1.plano}
                  </p>
                  <p className={cn('hidden' ,teste1.bytes === 'Megas' && 'text-3xl flex items-center gap-1',
                    teste1.bytes === 'Megas'
                  )}>
                    <Wifi/> {teste1.megas} Megas
                  </p>
                  <p className={cn('hidden',teste1.bytes === 'Gigas' && 'text-3xl flex items-center gap-1'
                  )}>
                    <Wifi/> {teste1.megas} GB
                  </p>
              </div>

              <p className='border-y border-black w-full py-1 text-center'>Apps ilimitados</p>

              <div className='flex w-full flex-col'>
                <p className='text-sm'>Po apenas:</p>
                <p className='text-lg justify-center w-full'>R$ {teste1.preco}/Mês</p>
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

export default function CardFibra({ id }: { id: string }) {
  return (
  <>
      <div id={id} className='h-fit w-full flex gap-5 flex-row font-light' >
      <CardNavFibra/> 
      </div>
  </>
)

}