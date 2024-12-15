import { useState } from 'react';
import soundManager from '../utils/sounds';
import './styles/soundToggle.css';

export default function SoundToggle() {
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    const newMutedState = soundManager.toggleMute();
    setIsMuted(newMutedState);
    soundManager.playSound('MENU_SELECT');
  };

  return (
    <button 
      className={`sound-toggle ${isMuted ? 'muted' : ''}`}
      onClick={toggleSound}
      aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
    >
      {isMuted ? '🔇' : '🔊'}
    </button>
  );
}
