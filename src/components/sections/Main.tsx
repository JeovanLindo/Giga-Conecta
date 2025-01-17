import Carousel from "../ui/carousel";


export default function Main({ id }: { id: string }){
  return(
    <>
      <section id={id} className="h-fit relative">
        <div className="flex absolute z-40 bottom-14 left-14">
          <button className="bg-white px-4 font-semibold rounded-sm py-2 border text-gigaAzul hover:bg-gray-300 transition-all">
            <a target="_blank" className="text-xl" href='https://wa.me/21991041111?text=Ol%C3%A1,%20estou%20interessado%20em%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20ConectaGiga.%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20dispon%C3%ADveis%20e%20como%20posso%20me%20tornar%20um%20cliente.%20Agrade%C3%A7o%20desde%20j%C3%A1%20pela%20aten%C3%A7%C3%A3o!'>Seja um cliente nosso!</a>
          </button>
        </div>
        <Carousel/>
      </section>
    </>
  )
}