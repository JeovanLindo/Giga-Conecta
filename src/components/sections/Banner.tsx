import { Button } from "../ui/button";

export default function Banner({id}: {id: string}){
 
  return(
  <>
    <section id={id} className="w-full flex justify-center bg-slate-100 items-center p-10">
      <div className="w-[45rem] flex items-end justify-end p-6 rounded-2xl h-72 bg-[url('/bannerMeioDoSite.png')]">
        <Button size={"lg"} variant={"secondary"}>
          <a target='_blank' href="https://wa.me/21991041111?text=Ol%C3%A1,%20estou%20interessado%20em%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20ConectaGiga.%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20dispon%C3%ADveis%20e%20como%20posso%20me%20tornar%20um%20cliente.%20Agrade%C3%A7o%20desde%20j%C3%A1%20pela%20aten%C3%A7%C3%A3o!">Assine já</a>
        </Button>
      </div>
    </section>
  </>
)

}
  
