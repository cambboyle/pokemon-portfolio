import RetroButton from './RetroButton';
import SoundToggle from './SoundToggle';
import './styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <RetroButton href="https://github.com/cambboyle" className="social-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </RetroButton>
          <RetroButton href="https://www.codedex.io/@cambboyle301" className="social-link" target="_blank" rel="noopener noreferrer">
            Codédex
          </RetroButton>
          <RetroButton href="www.linkedin.com/in/cbb00" className="social-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </RetroButton>
          <RetroButton href="https://x.com/cambboyle" className="social-link" target="_blank" rel="noopener noreferrer">
            X
          </RetroButton>
        </div>
        <div className="footer-credits">
          <p>Created with React and nostalgia.</p>
          <p className="save-text"> Game Saved! Last updated: {new Date().toLocaleDateString()}</p>
        </div>
        <div className="footer-sound">
          <SoundToggle />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
