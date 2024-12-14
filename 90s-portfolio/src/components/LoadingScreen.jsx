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
      { delay: 500 },
      { delay: 2000 },
      { delay: 1500 },
      { delay: 0 }
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
    <div className={`loading-screen ${stage >= 4 ? 'ready' : ''}`}>
      <div className="gameboy-screen">
        {stage >= 1 && (
          <div className={`nintendo-logo ${stage >= 2 ? 'dropped' : ''}`}>
            CAMERON'S
          </div>
        )}
        {stage >= 3 && (
          <div className="gameboy-logo">
            PORTFOLIO
          </div>
        )}
        {stage >= 4 && (
          <div className="press-start">
            PRESS START
          </div>
        )}
      </div>
    </div>
  );
}

LoadingScreen.propTypes = {
  onComplete: PropTypes.func.isRequired
};
