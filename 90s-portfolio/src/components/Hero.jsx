import RetroButton from './RetroButton';
import "./styles/hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="trainer-card">
        <div className="trainer-card-header">
          <span className="trainer-id">ID.12345</span>
          <span className="trainer-name">Cameron Boyle</span>
        </div>
        <div className="trainer-card-content">
          <div className="trainer-image">
            <img 
              src="https://play.pokemonshowdown.com/sprites/trainers/yellow.png"
              alt="Trainer Sprite"
              className="trainer-sprite"
            />
          </div>
          <div className="trainer-info">
            <div className="trainer-title">Full-Stack Developer</div>
            <div className="trainer-info-columns">
              <div className="trainer-info-left">
                <div className="trainer-stats">
                  <div className="stat-row">
                    <span className="stat-label">Region:</span>
                    <span className="stat-value">Web Development</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Specialty:</span>
                    <span className="stat-value">React & TypeScript</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Quest:</span>
                    <span className="stat-value">Building Amazing UIs</span>
                  </div>
                </div>
              </div>
              <div className="trainer-info-right">
                <div className="trainer-stats">
                  <div className="stat-row">
                    <span className="stat-label">Experience:</span>
                    <span className="stat-value">5+ Years</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Location:</span>
                    <span className="stat-value">Remote</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Languages:</span>
                    <span className="stat-value">EN, JS, TS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trainer-card-footer">
          <RetroButton href="#projects" className="cta-button pokedex-btn">
            View Projects
          </RetroButton>
          <RetroButton href="#about" className="cta-button stats-btn">
            About Me
          </RetroButton>
        </div>
      </div>
    </div>
  );
}
