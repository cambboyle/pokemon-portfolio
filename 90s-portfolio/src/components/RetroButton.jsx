import PropTypes from 'prop-types';
import soundManager from '../utils/sounds';
import './styles/retroButton.css';

export default function RetroButton({ onClick, children, className, type = 'button', href, target, rel, as: Component = 'button', to }) {
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
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  // If a custom component is provided (like Link), render it
  if (Component !== 'button') {
    return (
      <Component
        to={to}
        className={`retro-button ${className || ''}`}
        onMouseEnter={handleHover}
        onClick={handleClick}
      >
        {children}
      </Component>
    );
  }

  // Default button rendering
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
  type: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  as: PropTypes.elementType,
  to: PropTypes.string
};
