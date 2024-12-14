import RetroButton from './RetroButton'
import './styles/navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Cameron Boyle</div>
      <ul className="nav-list">
        <li className="nav-item">
          <RetroButton href="#about" className="nav-link">About</RetroButton>
        </li>
        <li className="nav-item">
          <RetroButton href="#projects" className="nav-link">Projects</RetroButton>
        </li>
        <li className="nav-item">
          <RetroButton href="#contact" className="nav-link">Contact</RetroButton>
        </li>
      </ul>
    </nav>
  )
}
