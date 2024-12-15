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
  return (
    <div className="tech-team">
      {skills.map((skill) => (
        <div key={skill.name} className="pokemon-card" data-type={getTechType(skill.category)}>
          <img 
            src={getTechSprite(skill.name)} 
            alt={skill.name}
            className="pokemon-sprite"
          />
          <div className="pokemon-name">
            {skill.name}
            <div className="tech-level">Lv.{getTechLevel(skill.name)}</div>
            <div className="tech-type" data-type={getTechType(skill.category)}>
              {formatCategory(skill.category)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechTeam;
