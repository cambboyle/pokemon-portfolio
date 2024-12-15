import RetroButton from './RetroButton'
import { Link } from 'react-router-dom'
import './styles/navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="nav-brand-link">Cameron Boyle</Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <RetroButton as={Link} to="/" className="nav-link">HOME</RetroButton>
        </li>
        <li className="nav-item">
          <RetroButton as={Link} to="/projects" className="nav-link">PROJECTS</RetroButton>
        </li>
        <li className="nav-item">
          <RetroButton as={Link} to="/about" className="nav-link">ABOUT</RetroButton>
        </li>
        <li className="nav-item">
          <RetroButton as={Link} to="/contact" className="nav-link">CONTACT</RetroButton>
        </li>
      </ul>
    </nav>
  )
}
