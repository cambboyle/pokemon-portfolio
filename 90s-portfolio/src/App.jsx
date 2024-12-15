import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import TechTeam from './components/TechTeam'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`app ${!loading ? 'loaded' : ''}`}>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div className="tech-team-section">
                  <h2>Cameron's Party</h2>
                  <TechTeam />
                </div>
              </>
            } />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App
