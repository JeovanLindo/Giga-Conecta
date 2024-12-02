import './App.css'
import Benefits from './components/sections/Benefits'
import Footer from './components/sections/Footer'
import Header from './components/sections/Header'
import Main from './components/sections/Main'
import PerksSection from './components/sections/Perks-Section'
import ServicesFibra from './components/sections/ServicesFibra'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Main id='main'/>
        <ServicesFibra id='servicesFibra'/>
        <PerksSection id='perks'/>
        <Benefits id='beneficios'/>
        <Footer id='footer'/>
      </div>
    </>
  )
}

export default App