import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import TechTeam from './components/TechTeam'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`app ${!loading ? 'loaded' : ''}`}>
        <Navbar />
        <Hero />
        <TechTeam />
        <Footer />
      </div>
    </>
  )
}

export default App
