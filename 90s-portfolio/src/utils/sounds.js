// Sound effect URLs - using short, optimized sounds
const SOUNDS = {
  GAMEBOY_START: '/sounds/gameboy-start.mp3',
  MENU_SELECT: '/sounds/menu-select.mp3',
  MENU_OPEN: '/sounds/menu-open.mp3',
};

// Volume levels for different sound types
const VOLUMES = {
  GAMEBOY_START: 0.3,  // Startup sound a bit louder
  MENU_SELECT: 0.2,    // Menu sounds quieter
  MENU_OPEN: 0.2,
};

class SoundManager {
  constructor() {
    this.sounds = new Map();
    this.audioContext = null;
    this.isMuted = false;
  }

  initAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  async preloadSounds() {
    this.initAudioContext();
    
    for (const [key, url] of Object.entries(SOUNDS)) {
      try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        this.sounds.set(key, audioBuffer);
      } catch (err) {
        console.log(`Failed to load sound ${key}:`, err);
      }
    }
  }

  async playSound(soundKey, reverse = false) {
    if (this.isMuted || !this.audioContext) return;

    const buffer = this.sounds.get(soundKey);
    if (!buffer) return;

    const source = this.audioContext.createBufferSource();
    const gainNode = this.audioContext.createGain();
    
    source.buffer = buffer;
    
    // Set volume
    const volume = VOLUMES[soundKey] || 0.5;
    gainNode.gain.value = volume;

    if (reverse) {
      source.playbackRate.value = -1;
      source.start(0, buffer.duration, buffer.duration);
    } else {
      source.start(0);
    }

    source.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
  }

  async playMenuBack() {
    await this.playSound('MENU_OPEN', true);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

// Create a singleton instance
const soundManager = new SoundManager();
export default soundManager;
