import CardFibra from "../ui/cardFibra"

function ServicesFibra({ id }: { id: string }){

  return (
    <>
    <section id={id} className='flex-col bg-gray-100 flex font-inter justify-center items-start py-12 px-12 gap-10 md:px-32' >
      <div className="h-fit w-full flex flex-col gap-10">
        <h1 className="text-4xl text-claroVermelho font-bold">Serviços Giga+ Fibra</h1>
        <CardFibra id="card Fibra"/>
      </div>
    </section>
    </>
  )
}

export default ServicesFibra