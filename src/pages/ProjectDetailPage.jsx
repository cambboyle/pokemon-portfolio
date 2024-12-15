import { useParams, Link } from 'react-router-dom';
import RetroButton from '../components/RetroButton';
import './styles/projectDetailPage.css';

const projects = {
  boulder: {
    name: "Boulder Project",
    badge: "boulder",
    description: "A rock-solid foundation in full-stack development",
    longDescription: `This project demonstrates my expertise in building robust full-stack applications. 
    It features a scalable architecture, efficient database design, and modern development practices.
    
    Key achievements:
    • Implemented secure user authentication
    • Optimized database queries for better performance
    • Developed a comprehensive test suite
    • Deployed using containerization for scalability`,
    tech: ["React", "Node.js", "MongoDB", "Docker", "Jest"],
    pokemon: "Onix",
    type: "Rock",
    link: "https://github.com/yourusername/project1",
    features: [
      "User authentication and authorization",
      "Real-time data updates",
      "Responsive design",
      "API documentation",
      "Automated testing"
    ],
    challenges: [
      "Optimizing database performance",
      "Implementing real-time features",
      "Ensuring security best practices"
    ],
    screenshots: [
      "/images/boulder-1.png",
      "/images/boulder-2.png",
      "/images/boulder-3.png"
    ]
  },
  cascade: {
    name: "Cascade Project",
    badge: "cascade",
    description: "Flowing and dynamic UI/UX design",
    longDescription: `A showcase of modern UI/UX design principles and implementation.
    This project focuses on creating beautiful, intuitive user interfaces with smooth animations
    and responsive layouts.
    
    Key achievements:
    • Created a component library
    • Implemented advanced animations
    • Achieved perfect Lighthouse scores
    • Built accessible interfaces`,
    tech: ["React", "Tailwind", "Framer Motion", "Storybook", "Cypress"],
    pokemon: "Starmie",
    type: "Water",
    link: "https://github.com/yourusername/project2",
    features: [
      "Custom animation system",
      "Themeable components",
      "Accessibility features",
      "Performance optimization",
      "Interactive documentation"
    ],
    challenges: [
      "Balancing aesthetics with performance",
      "Cross-browser compatibility",
      "Animation optimization"
    ],
    screenshots: [
      "/images/cascade-1.png",
      "/images/cascade-2.png",
      "/images/cascade-3.png"
    ]
  }
  // Add more projects here
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found!</h1>
        <p>Looks like you&apos;ve encountered a MissingNo.</p>
        <RetroButton as={Link} to="/projects" className="back-button">
          Return to Gym
        </RetroButton>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-header">
        <div className="badge-display">
          <div className={`gym-badge ${project.badge}`} />
          <h1>{project.name}</h1>
        </div>
        <div className="pokemon-info">
          <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              Object.keys(projects).indexOf(projectId) + 95
            }.png`}
            alt={project.pokemon}
            className="pokemon-sprite"
          />
          <span className={`type-badge ${project.type.toLowerCase()}`}>
            {project.type}
          </span>
        </div>
      </div>

      <div className="project-content">
        <section className="project-description">
          <h2>About this Project</h2>
          <p>{project.longDescription}</p>
        </section>

        <section className="project-features">
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="project-challenges">
          <h2>Challenges Overcome</h2>
          <ul>
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </section>

        <section className="tech-stack">
          <h2>Tech Stack</h2>
          <div className="tech-badges">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </section>

        <div className="project-actions">
          <RetroButton as="a" href={project.link} target="_blank" rel="noopener noreferrer">
            View Source
          </RetroButton>
          <RetroButton as={Link} to="/projects">
            Back to Gym
          </RetroButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
