import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./styles/hero.css";

const dialogueLines = [
  "Hello there! Welcome to the world of Web Development!",
  "My name is CAMERON! People call me the FULL STACK DEVELOPER!",
  "This world is inhabited by creatures called PROJECTS!",
  "For some people, PROJECTS are for business... Others use them for creativity...",
  "Myself... I develop PROJECTS as a profession.",
  "Your very own PORTFOLIO legend is about to unfold!",
  "A world of dreams and adventures awaits! Let's go!"
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (textIndex < dialogueLines.length) {
      if (isTyping) {
        if (currentText.length < dialogueLines[textIndex].length) {
          const timer = setTimeout(() => {
            setCurrentText(dialogueLines[textIndex].slice(0, currentText.length + 1));
          }, 50);
          return () => clearTimeout(timer);
        } else {
          setIsTyping(false);
        }
      }
    }
  }, [textIndex, currentText, isTyping]);

  const handleClick = () => {
    if (!isTyping && textIndex < dialogueLines.length - 1) {
      setTextIndex(textIndex + 1);
      setCurrentText('');
      setIsTyping(true);
    } else if (!isTyping && textIndex === dialogueLines.length - 1) {
      setIsComplete(true);
    }
  };

  const renderNavButtons = () => (
    <div className="nav-buttons">
      <Link to="/projects" className="nav-button">
        <span className="button-text">PROJECTS</span>
      </Link>
      <Link to="/about" className="nav-button">
        <span className="button-text">ABOUT</span>
      </Link>
      <Link to="/contact" className="nav-button">
        <span className="button-text">CONTACT</span>
      </Link>
    </div>
  );

  return (
    <div className="hero-container">
      <div className="oak-intro">
        <div className="oak-screen">
          <div className="oak-image">
            <img 
              src="https://play.pokemonshowdown.com/sprites/trainers/yellow.png"
              alt="Developer Sprite"
              className="trainer-sprite"
            />
          </div>
          {!isComplete ? (
            <div className="dialogue-box" onClick={handleClick}>
              <p className="dialogue-text">{currentText}</p>
              {!isTyping && <span className="next-arrow">▼</span>}
            </div>
          ) : (
            renderNavButtons()
          )}
        </div>
      </div>
    </div>
  );
}
