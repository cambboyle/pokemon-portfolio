import React from 'react';
import { Link } from 'react-router-dom';
import './styles/projectCard.css';

const ProjectCard = ({ project, id }) => {
  const getTypeColor = (type) => {
    const typeColors = {
      Rock: '#B8A038',
      Water: '#6890F0',
      Fire: '#F08030',
      Electric: '#F8D030',
      Grass: '#78C850',
      Normal: '#A8A878'
    };
    return typeColors[type] || '#68A090';
  };

  return (
    <Link to={`/project/${project.badge}`} className="project-card-link">
      <div className="project-card">
        <div className="card-header">
          <div className="card-name">{project.name}</div>
          <div className="card-hp">HP 80</div>
        </div>

        <div className="card-image">
          <img src={project.badgeImage} alt={project.name} className="project-image" />
        </div>

        <div className="card-type" style={{ backgroundColor: getTypeColor(project.type) }}>
          {project.type} • {project.pokemon}
        </div>

        <div className="card-info">
          <div className="info-row">
            <span className="info-label">Level</span>
            <span className="info-value">50</span>
          </div>
          <div className="card-description">
            <div className="description-text">{project.description}</div>
          </div>
        </div>

        <div className="card-moves">
          {project.tech.slice(0, 4).map((tech, index) => (
            <div key={index} className="move">
              <span className="move-name">{tech}</span>
              <span className="move-power">★★</span>
            </div>
          ))}
        </div>

        <div className="card-footer">
          <span className="weakness">Weakness</span>
          <span className="resistance">Resistance</span>
          <span className="retreat-cost">Retreat Cost</span>
        </div>

        <div className="card-copyright">
          &copy;2023 {id}/150 ◆
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
