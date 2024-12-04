import LogoBranca from '@/assets/ConectaPretaAzul.svg'
import GigaLogo from '@/assets/Logo.png'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustifyIcon } from "lucide-react"
 

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
    const offset = 50; // ajuste esse valor conforme necessário

    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Posição do elemento
      const offsetPosition = sectionPosition - offset; // Subtrai o offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
};

export default function NavBar() {
  return (
  <header className="sticky top-0 z-50 overflow-hidden flex justify-between font-inter items-center h-16 w-full bg-slate-100 sm:px-32 px-4" >
    
    <div className='flex flex-row items-center gap-16'>
      <a href={'/'} className='flex flex-row items-center w-fit h-fit gap-3'>
          <img className='w-32' src={LogoBranca} alt="Logo da SmartLagos roxa"/>
          <img className='h-5' src={GigaLogo} alt="Logo da Vivo para empresas autorizadas" />
      </a>
      <div className='hidden lg:flex flex-row gap-4' >
          <nav className='flex flex-row gap-4 text-gray-950' >
            <button onClick={()=> scrollToSection('beneficios')} className='hover:cursor-pointer hover:text-[#172E80] transition-all'>Soluções</button>
            <button onClick={()=> scrollToSection('servicesFibra')} className='hover:cursor-pointer hover:text-[#172E80] transition-all'>Internet</button>
            <button onClick={()=> scrollToSection('footer')} className='hover:cursor-pointer hover:text-[#172E80] transition-all'>Contatos</button>
          </nav>
      </div>
    </div>
    
    <Sheet modal={false}>
      <SheetTrigger className='lg:hidden'>
        <Button className="bg-transparent shadow-none text-gray-50 lg:hidden">
          <AlignJustifyIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent className='h-fit flex bg-claroVermelho outline-none border-none flex-col gap-1'>
        <div className='flex space-x-2 flex-col self-center w-fit h-fit'> 
          <img className='w-40' src={LogoBranca} alt="Logo da SmartLagos roxa"/>
        </div>
        <SheetHeader className='flex flex-col gap-3'>
          <div>
            <SheetTitle className='text-xl text-gray-50 hover:cursor-pointer hover:translate-x-1 hover:text-gray-200 transition-all'><button onClick={()=> scrollToSection('servicesMovel')}>Móvel</button></SheetTitle>
            <SheetDescription className='text-gray-200 text-xs'>
              Veja nossas ofertas de internet móvel!
            </SheetDescription>
          </div>
          <div>
            <SheetTitle className='text-xl text-gray-50 hover:cursor-pointer hover:translate-x-1 hover:text-gray-200 transition-all'><button onClick={()=> scrollToSection('perks')}>soluções</button></SheetTitle>
            <SheetDescription className='text-gray-200 text-xs'>
              Veja algumas soluções para seus serviços!
            </SheetDescription>
          </div>
          <div>
            <SheetTitle className='text-xl text-gray-50 hover:cursor-pointer hover:translate-x-1 hover:text-gray-200 transition-all'><button onClick={()=> scrollToSection('servicesFibra')}>Internet</button></SheetTitle>
            <SheetDescription className='text-gray-200 text-xs'>
              Veja nossas ofertas de internet fibra!
            </SheetDescription>
          </div>
          <div>
            <SheetTitle className='text-xl text-gray-50 hover:cursor-pointer hover:translate-x-1 hover:text-gray-200 transition-all'><button onClick={()=> scrollToSection('beneficios')}>Benefícios</button></SheetTitle>
            <SheetDescription className='text-gray-200 text-xs'>
              Veja porque deve contratar nossos serviços!
            </SheetDescription>
          </div>
          <div>
            <SheetTitle className='text-xl text-gray-50 hover:cursor-pointer hover:translate-x-1 hover:text-gray-200 transition-all'><button onClick={()=> scrollToSection('footer')}>Contatos</button></SheetTitle>
            <SheetDescription className='text-gray-200 text-xs'>
              Precisa de ajuda ou quer nos encontrar!
            </SheetDescription>
          </div>
          <Button
            asChild>
            <a target='_blank' href=''>Contrate</a>
          </Button>
        </SheetHeader>
      </SheetContent>
    </Sheet>


    <Button
    className='hidden lg:flex'
    >
      <a href="" target='_blank'>Contrate</a>
    </Button>
  </header> 
  )
} 