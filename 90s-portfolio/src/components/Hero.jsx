import RetroButton from './RetroButton';
import "./styles/hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-welcome">
        <h1>Welcome to Cameron Boyle&apos;s Trainer HQ!</h1>
        <h2>Full-Stack Developer | Pokémon Enthusiast | Retro Web Designer</h2>
      </div>
      <div className="hero-content">
        <div className="pixel-art-container">
          <div className="pixel-art-placeholder">
            {/* Placeholder for pixel art image */}
            <div className="placeholder-text">Pixel Art Coming Soon</div>
          </div>
        </div>
        <div className="pokedex-card">
          <div className="pokedex-header">
            <span className="pokemon-number">#001</span>
            <span className="pokemon-name">Cameron Boyle</span>
          </div>
          <div className="pokedex-description">
            <p>A Junior Dev Pokémon. Specializes in TypeScript, React, and UX Design.</p>
            <p>Known to explore the web development wilderness.</p>
          </div>
          <div className="moves-section">
            <h3>Moves:</h3>
            <ul className="moves-list">
              <li className="move">
                <span className="move-name">React.js</span>
                <span className="move-effect critical">→ Critical Hit!</span>
              </li>
              <li className="move">
                <span className="move-name">Node.js</span>
                <span className="move-effect sturdy">→ Sturdy Defense!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cta-buttons">
        <RetroButton href="#projects" className="cta-button pokedex-btn">
          Explore My Pokédex
        </RetroButton>
        <RetroButton href="#about" className="cta-button stats-btn">
          View Trainer Stats
        </RetroButton>
      </div>
    </div>
  );
}
