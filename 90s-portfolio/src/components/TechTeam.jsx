import { useEffect } from 'react';
import soundManager from '../utils/sounds';
import { getTechSprite, getTechType, getTechLevel } from '../utils/techIcons';
import './styles/TechTeam.css';

const skills = [
  { name: "React", category: "Framework" },
  { name: "JavaScript", category: "FrontendLang" },
  { name: "Python", category: "BackendLang" },
  { name: "HTML", category: "Markup" },
  { name: "CSS", category: "Style" },
  { name: "Git", category: "Version" }
];

const formatCategory = (category) => {
  switch(category) {
    case 'FrontendLang': return 'Frontend';
    case 'BackendLang': return 'Backend';
    default: return category;
  }
};

const TechTeam = () => {
  useEffect(() => {
    const slots = document.querySelectorAll('.pokemon-slot');
    slots.forEach(slot => {
      slot.addEventListener('mouseenter', () => {
        soundManager.playSound('MENU_SELECT');
      });
    });
  }, []);

  return (
    <div className="tech-team-container">
      <div className="tech-team-inner">
        <h2 className="tech-team-title">Tech Team</h2>
        <div className="pokemon-team">
          {skills.map((skill) => (
            <div key={skill.name} className="pokemon-slot" data-type={getTechType(skill.category)}>
              <div className="tech-info">
                <img 
                  src={getTechSprite(skill.name)} 
                  alt={skill.name}
                  className="tech-sprite"
                />
                <div className="tech-details">
                  <h3 className="tech-name">{skill.name}</h3>
                  <div className="level">Lv. {getTechLevel(skill.name)}</div>
                  <div className="type-badges">
                    <span className={`type-badge type-${getTechType(skill.category).toLowerCase()}`}>
                      {formatCategory(skill.category)}
                    </span>
                  </div>
                  <div className="hp-bar-container">
                    <div className="hp-bar" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechTeam;
