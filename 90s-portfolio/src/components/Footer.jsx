import RetroButton from './RetroButton';
import './styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <RetroButton href="https://github.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </RetroButton>
          <RetroButton href="https://linkedin.com/in/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </RetroButton>
          <RetroButton href="https://twitter.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
            Twitter
          </RetroButton>
        </div>
        <div className="footer-credits">
          <p>Created with React and nostalgia.</p>
          <p className="save-text"> Game Saved! Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
