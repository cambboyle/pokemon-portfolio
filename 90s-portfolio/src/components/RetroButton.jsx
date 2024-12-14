import PropTypes from 'prop-types';
import soundManager from '../utils/sounds';
import './styles/retroButton.css';

export default function RetroButton({ onClick, children, className, type = 'button', href }) {
  const handleHover = () => {
    soundManager.playSound('MENU_SELECT');
  };

  const handleClick = (e) => {
    soundManager.playSound('MENU_OPEN');
    if (onClick) onClick(e);
  };

  // If href is provided, render as an anchor tag
  if (href) {
    return (
      <a
        href={href}
        className={`retro-button ${className || ''}`}
        onMouseEnter={handleHover}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as a button
  return (
    <button
      type={type}
      className={`retro-button ${className || ''}`}
      onMouseEnter={handleHover}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

RetroButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  href: PropTypes.string
};
