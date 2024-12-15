import { useState } from 'react';
import ProjectCard from './ProjectCard';
import './styles/gymBadges.css';

// Import badge images
import boulderBadge from '../assets/badges/boulder.png';
import cascadeBadge from '../assets/badges/cascade.png';
import thunderBadge from '../assets/badges/thunder.png';
import rainbowBadge from '../assets/badges/rainbow.png';

const projects = [
  {
    name: "Boulder Project",
    badge: "boulder",
    badgeImage: boulderBadge,
    description: "A rock-solid foundation in full-stack development. Built with performance and scalability in mind.",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
    pokemon: "Onix",
    type: "Rock",
    link: "https://github.com/yourusername/project1"
  },
  {
    name: "Cascade Project",
    badge: "cascade",
    badgeImage: cascadeBadge,
    description: "Flowing and dynamic UI/UX design with smooth animations and responsive layouts.",
    tech: ["React", "Tailwind", "Framer Motion"],
    pokemon: "Starmie",
    type: "Water",
    link: "https://github.com/yourusername/project2"
  },
  {
    name: "Thunder Project",
    badge: "thunder",
    badgeImage: thunderBadge,
    description: "High-performance application with real-time updates and lightning-fast responses.",
    tech: ["Next.js", "WebSocket", "Redis"],
    pokemon: "Raichu",
    type: "Electric",
    link: "https://github.com/yourusername/project3"
  },
  {
    name: "Rainbow Project",
    badge: "rainbow",
    badgeImage: rainbowBadge,
    description: "A colorful and accessible design system with comprehensive component library.",
    tech: ["React", "Storybook", "Jest", "Cypress"],
    pokemon: "Vileplume",
    type: "Grass",
    link: "https://github.com/yourusername/project4"
  }
];

const GymBadges = () => {
  const [hoveredBadge, setHoveredBadge] = useState(null);

  return (
    <div className="gym-badges-container">
      <h2 className="section-title">Gym Badges (Projects)</h2>
      <div className="badges-grid">
        {projects.map((project, index) => (
          <div 
            key={project.badge}
            className="badge-wrapper"
            onMouseEnter={() => setHoveredBadge(project.badge)}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            <ProjectCard project={project} id={index + 1} />
            <div className={`badge-overlay ${hoveredBadge === project.badge ? 'show' : ''}`}>
              <img 
                src={project.badgeImage} 
                alt={`${project.name} Badge`} 
                className="badge-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymBadges;
