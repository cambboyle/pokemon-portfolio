import soundManager from '../utils/sounds';

export function useSoundEffect() {
  const withSound = {
    hover: () => {
      soundManager.playSound('MENU_SELECT');
    },
    click: () => {
      soundManager.playSound('MENU_OPEN');
    }
  };

  return withSound;
}
