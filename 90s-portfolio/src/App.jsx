import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import SoundToggle from './components/SoundToggle'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`app ${!loading ? 'loaded' : ''}`}>
        <Navbar />
        <Hero />
        <Footer />
        <SoundToggle />
      </div>
    </>
  )
}

export default App
