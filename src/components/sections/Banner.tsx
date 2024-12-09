import { Button } from "../ui/button";

export default function Banner({id}: {id: string}){
 
  return(
  <>
    <section id={id} className="w-full flex justify-center bg-slate-100 items-center p-10">
      <div className="w-[45rem] flex items-end justify-end p-6 rounded-2xl h-72 bg-[url('/bannerMeioDoSite.png')]">
        <Button size={"lg"} variant={"secondary"}>
          <a href="">Assine já</a>
        </Button>
      </div>
    </section>
  </>
)

}
  
