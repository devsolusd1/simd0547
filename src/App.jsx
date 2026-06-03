import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LiveStats from './components/LiveStats'
import PriceChart from './components/PriceChart'
import BurnDashboard from './components/BurnDashboard'
import HowItWorks from './components/HowItWorks'
import Tokenomics from './components/Tokenomics'
import AboutSIMD from './components/AboutSIMD'
import TechnicalSpec from './components/TechnicalSpec'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-mesh min-h-screen text-white">
      <Navbar />
      <Hero />
      <LiveStats />
      <PriceChart />
      <BurnDashboard />
      <HowItWorks />
      <TechnicalSpec />
      <AboutSIMD />
      <Tokenomics />
      <Footer />
    </div>
  )
}
