import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/loadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleStart = () => {
      setVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500);
      document.removeEventListener('keydown', handleStart);
      document.removeEventListener('click', handleStart);
    };

    // Nintendo style staged loading
    const stages = [
      { delay: 1000 },  // Initial pause
      { delay: 2000 },  // Nintendo logo drop
      { delay: 1500 },  // Game Boy sound plays
      { delay: 1000 },  // Press Start appears
    ];

    const timers = [];

    stages.forEach((stage, index) => {
      const timer = setTimeout(() => {
        setStage(index + 1);
        if (index === stages.length - 1) {
          // Show Press Start button
          document.addEventListener('keydown', handleStart);
          document.addEventListener('click', handleStart);
        }
      }, stages.slice(0, index + 1).reduce((acc, curr) => acc + curr.delay, 0));
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
            CAMTENDO
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
