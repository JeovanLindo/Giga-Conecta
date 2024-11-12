import { ComponentProps, useState } from 'react'

import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'
import image1 from '@/assets/Computador.jpg'
import image2 from '@/assets/wifi.jpg'
import image3 from '@/assets/work.jpg'
interface PerkProps extends ComponentProps<'div'> {
  image: string | undefined
  desc: string
  isExpanded: boolean
}

function Perk({ image, title, desc, className, isExpanded, ...props }: PerkProps) {
  return (
    <div
      {...props}
      className={cn(
        isExpanded
          ? 'basis-2/4 text-white saturate-100'
          : 'basis-1/4 text-transparent saturate-50',
        'group relative h-[10rem] overflow-clip rounded-md transition-all duration-700 md:min-h-full',
        className,
      )}
    >
      {/* Title */}
      <div className='absolute p-5 gap-4 bottom-0 z-20 h-fi flex justify-end flex-col'>
        <p className="text-4xl transition-all delay-0 duration-0 ease-out group-hover:delay-150 group-hover:duration-300 group-hover:ease-in">
          {title}
        </p>
        {/* Description */}
        <p className="text-lg transition-all delay-0 duration-0 ease-out group-hover:delay-150 group-hover:duration-300 group-hover:ease-in">
          {desc}
        </p>
      </div>
      {/* Gradient */}
      <div className="absolute h-full w-full bg-gradient-to-t from-black to-transparent to-100% transition-all"></div>
      <picture>
        <img
          src={image}
          alt={title}
          className="min-h-full w-full object-cover"
        />
      </picture>
    </div>
  )
}

const perkList = [
  {
    image: image1,
    title: 'Microsoft 365',
    desc: 'Otimize a produtividade da sua equipe com ferramentas online colaborativas Microsoft.',
  },
  {
    image: image2,
    title: 'Wi-fi Mesh',
    desc: 'Amplie a cobertura do sinal do wi-fi  na sua empresa com os nossos Extensores Wi-Fi Mesh.',
  },
  {
    image: image3,
    title: 'Claro Clube',
    desc: 'O programa de benefícios para sua empresa, você e seus colaboradores.',
  },
]

export default function PerksSection({ id }: { id: string }) {
  const [expanded, setExpanded] = useState<number>(0)
  function handleMouseOver(i: number) {
    setExpanded(i)
  }

  return (
    <section id={id} className='dark:bg-zinc-900 bg-gray-100' >
      <Container className="space-y-8 py-12 bg-gray-100">
        <div className="flex flex-col items-end justify-start gap-4 lg:flex-row">
          {/* Title */}
          <div className="space-y-2">
            {/* <h4 className="w-full text-center tracking-wider text-slate-400 lg:text-left">
              Customization
            </h4> */}
            <h3 className="max-w-sm text-center font-alt text-4xl font-bold text-claroVermelho  md:text-start">
              Soluções digitais
            </h3>
          </div>
          {/* Caption */}
          {/* <p className="max-w-lg text-center text-slate-400 md:text-start">
            Turn your epic RPG memories into timeless art! Let us capture the
            essence of your characters in a stunning illustration that will
            forever remind you of the legendary adventures you&apos;ve shared
            together
          </p> */}
        </div>
        {/* Cards */}
        <div className="relative flex h-[53rem] flex-col gap-6 md:h-96 md:flex-row">
          {perkList.map((perk, i) => (
            <Perk
              key={perk.title}
              {...perk}
              isExpanded={expanded === i}
              onMouseOver={() => handleMouseOver(i)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}