import PricesFibra from '@/lib/pricesfibra'

import {CircleCheckBig} from 'lucide-react'

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
    beneficios: price.Beneficios
  }
})                     

export function CardNavFibra() {
  return (
    <Swiper
        className=''
        slidesPerView={1}
        spaceBetween={14}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        breakpoints={{
         640: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          1180: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1520: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1920: {
            slidesPerGroup: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {teste.map((teste1, index)=>(
          <SwiperSlide className=' h-fit flex flex-row justify-center w-72 mb-10 items-center'
          key={index}>
            <div className='flex flex-col h-fit justify-between items-center border border-gigaAzul gap-8 rounded-md w-full p-5'>
              <div className='flex gap-3 w-full items-center justify-center h-fit flex-col'>
                  <p className='text-4xl font-bold text-gigaAzul flex items-center gap-1'>
                   {teste1.megas}
                   {teste1.bytes === 'megas' ? ' MEGA' : '' }
                  </p>
              </div>

              <div className='flex w-full flex-col'>
                <p className='text-md text-gigaAzul opacity-80 flex gap-1 flex-row'><p>{teste1.plano}</p> por apenas:</p>
                <p className='text-3xl text-gigaAzul justify-start w-full font-medium flex flex-row items-end'>R$ {teste1.preco}<p className='font-normal text-base'>/Mês</p></p>
              </div>

              <div className='w-full flex gap-3 flex-col'>
                <h1 className='font-normal text-gigaAzul' >Benefícios</h1>   
                <ul >{Object.values(teste1.beneficios).map((beneficio, index) => (
                  <li key={index} className='text-md items-center flex flex-row gap-1
                   opacity-80 text-gigaAzul'>
                   <CircleCheckBig className='w-4'/> {beneficio}
                  </li>
                ))}
                </ul>
                
              </div>

              <Button variant={'outline'} className='w-fit'>
                <a target='_blank' href={`https://wa.me/5521991041111?text=Ol%C3%A1,%20quero%20ser%20um%20cliente%20da%20Conecta%20Giga%20e%20me%20interessei%20pelo%20plano%20de%20${teste1.megas}%20Mega%20por%20${teste1.preco}%20!`}>Contratar serviço fibra</a>
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