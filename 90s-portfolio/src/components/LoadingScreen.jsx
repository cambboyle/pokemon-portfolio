import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import soundManager from '../utils/sounds';
import './styles/loadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Preload sounds
    soundManager.preloadSounds();
    
    const handleStart = () => {
      soundManager.playSound('MENU_OPEN');
      setVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500);
      document.removeEventListener('keydown', handleStart);
      document.removeEventListener('click', handleStart);
    };

    const timers = [];
    let totalDelay = 0;

    const stages = [
      { delay: 500 },  // Initial delay
      { delay: 2000 }, // Nintendo logo drop
      { delay: 1500 }, // Boot text fade in
      { delay: 1000 }, // Line animation
      { delay: 500 }   // Loading dots
    ];

    stages.forEach((stage, index) => {
      const timer = setTimeout(() => {
        setStage(index + 1);
        if (index === 1) {
          soundManager.playSound('GAMEBOY_START');
        }
        if (index === stages.length - 1) {
          document.addEventListener('keydown', handleStart);
          document.addEventListener('click', handleStart);
        }
      }, totalDelay);
      
      totalDelay += stage.delay;
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      document.removeEventListener('keydown', handleStart);
      document.removeEventListener('click', handleStart);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className={`loading-screen ${stage === 4 ? 'ready' : ''}`}>
      <div className="gameboy-boot">
        <div className="gameboy-screen">
          <div className={`nintendo-logo ${stage >= 1 ? 'visible' : ''}`}>Cameron&apos;s Portfolio</div>
          <div className={`boot-text ${stage >= 2 ? 'visible' : ''}`}>
            <div className="copyright"> 2000</div>
          </div>
          <div className={`boot-line ${stage >= 3 ? 'visible' : ''}`}></div>
          <div className={`loading-dots ${stage >= 4 ? 'visible' : ''}`}>
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </div>
          <div className={`press-enter ${stage >= 4 ? 'visible' : ''}`}>
            PRESS ENTER
          </div>
        </div>
      </div>
    </div>
  );
}

LoadingScreen.propTypes = {
  onComplete: PropTypes.func.isRequired
};
