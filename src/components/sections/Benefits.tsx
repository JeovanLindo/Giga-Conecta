import Beneficios from "@/lib/beneficios"
import { Button } from "../ui/button"

const list = Beneficios.map((title)=> {
  return {
    title : title.titulo,
    desc : title.descricao,
    icon : title.icon
  }
})

export default function Benefits ({id}: {id: string}){
  return(
    <>
    <section id={id} className="bg-gray-100 flex flex-col px-12 lg:px-32 py-12 w-full gap-10 justify-center h-fit">
     {/*  <div>
        <h1 className="text-2xl">
          Beneficios de ser um cliente Claro
        </h1>
      </div> */}
      
      <div className="flex flex-col lg:flex-row gap-3 justify-between items-center w-full h-fit">

      <div className="w-full flex flex-col lg:h-56 h-fit gap-10 lg:items-start items-center justify-between">
          <h1 className="text-4xl lg:w-96 text-center lg:text-left text-claroVermelho" >Sua empresa com mais benefícios</h1>
          <Button>
            <a href="">Contrate</a>  
          </Button> 
        </div>
        <div className="flex w-full justify-center lg:justify-start flex-row flex-wrap gap-3 h-fit">
          {list.map((bl)=>(
            <div key={bl.title} className="rounded-lg justify-between hover:scale-105 transition-all flex flex-col border p-2 border-claroVermelho h-36 w-40">
              <div>
                <div className="text-claroVermelho" >{bl.icon}</div>
                <h1 className="text-claroVermelho">{bl.title}</h1>
              </div>
              <p className="text-xs text-gray-600">{bl.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
    </>
  )
}