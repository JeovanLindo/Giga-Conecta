import './App.css'
import Footer from './components/sections/Footer'
import Header from './components/sections/Header'
import Main from './components/sections/Main'
import PerksSection from './components/sections/Perks-Section'
import ServicesFibra from './components/sections/ServicesFibra'
import Banner from './components/sections/Banner'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Main id='main'/>
        <ServicesFibra id='servicesFibra'/>
        <PerksSection id='perks'/>
        <Banner id='banner'/>
        <Footer id='footer'/>
      </div>
    </>
  )
}

export default App