import CardMovel from "../ui/cardMovel"

function ServicesMovel({ id }: { id: string }){

  return (
    <>
    <section id={id} className='flex-col bg-gray-100 flex font-inter justify-center items-start py-12 px-12 gap-10 md:px-32' >
      <div className="h-fit w-full flex flex-col gap-10">
        <h1 className='text-4xl font-bold text-claroVermelho'>Serviços Claro Móvel</h1>
        <CardMovel id='card Movel'/>
      </div>
    </section>
    </>
  )
}

export default ServicesMovel