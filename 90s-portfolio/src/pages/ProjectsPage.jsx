import { useState, useEffect } from 'react';
import './styles/projectsPage.css';

const ProjectLoading = () => (
  <div className="loading-screen">
    <div className="loading-text">LOADING...</div>
    <div className="scanline"></div>
    <div className="static"></div>
  </div>
);

const projects = [
  {
    id: "001",
    name: "Pokémon Portfolio Website",
    category: "Frontend Development",
    description: "A nostalgic web portfolio with modern technologies and retro aesthetics.",
    technologies: ["React", "JavaScript", "Figma", "CSS"],
    status: "Deployed",
    link: "https://github.com/cambboyle/pokemon-portfolio"
  },
  {
    id: "002",
    name: "mica.productivity",
    category: "Web Application",
    description: "Minimalistic productivity tool for task management and organization.",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    status: "Active",
    link: "https://github.com/cambboyle/mica-productivity"
  },
  {
    id: "003",
    name: "Kickin' It",
    category: "Full Stack",
    description: "E-Commerce platform with secure payments and inventory management.",
    technologies: ["Django", "PostgreSQL", "JavaScript", "Python", "Stripe"],
    status: "Deployed",
    link: "https://github.com/cambboyle/Kickin-it-v1"
  },
  {
    id: "004",
    name: "The Recipe Vault",
    category: "Full Stack",
    description: "Recipe sharing platform with user authentication and recipe management.",
    technologies: ["Flask", "MongoDB", "JavaScript", "Python"],
    status: "Deployed",
    link: "https://github.com/cambboyle/the-recipe-vault"
  }
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [screenEffect, setScreenEffect] = useState('screen-off');

  useEffect(() => {
    // Initial page load animation
    setTimeout(() => {
      setScreenEffect('screen-on');
      setTimeout(() => {
        setSelectedProject(projects[0]);
        setIsLoading(false);
        setScreenEffect('');
      }, 1000);
    }, 2000);
  }, []);

  const handleProjectSelect = (project) => {
    if (project.id === selectedProject?.id) return;
    
    setIsLoading(true);
    setScreenEffect('screen-off');
    
    setTimeout(() => {
      setScreenEffect('screen-on');
      setTimeout(() => {
        setSelectedProject(project);
        setTimeout(() => {
          setIsLoading(false);
          setScreenEffect('');
        }, 300);
      }, 200);
    }, 100);
  };

  return (
    <div className="projects-page">
      <div className="pokedex-container">
        <div className="pokedex-left">
          <div className="screen-header">
            <div className="led-lights">
              <div className="led led-blue"></div>
              <div className="led led-red"></div>
              <div className="led led-yellow"></div>
              <div className="led led-green"></div>
            </div>
          </div>
          
          <div className={`main-screen ${screenEffect}`}>
            {isLoading ? (
              <ProjectLoading />
            ) : selectedProject && (
              <div className="project-display">
                <div className="project-header">
                  <h2 className="project-name">{selectedProject.name}</h2>
                  <span className="project-id">#{selectedProject.id}</span>
                </div>
                
                <div className="project-category">
                  <span className="label">Category:</span> {selectedProject.category}
                </div>
                
                <div className="project-description">
                  {selectedProject.description}
                </div>
                
                <div className="project-tech">
                  <span className="label">Technologies:</span>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-status">
                  <span className="label">Status:</span>
                  <span className={`status-badge ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                    {selectedProject.status}
                  </span>
                </div>
                
                <a 
                  href={selectedProject.link} 
                  className="view-project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            )}
          </div>
          
          <div className="control-pad">
            <div className="d-pad">
              <div className="d-pad-center"></div>
            </div>
          </div>
        </div>
        
        <div className="pokedex-right">
          <div className="project-list">
            {projects.map((project) => (
              <button
                key={project.id}
                className={`project-list-item ${selectedProject?.id === project.id ? 'active' : ''}`}
                onClick={() => handleProjectSelect(project)}
              >
                <span className="project-number">#{project.id}</span>
                <span className="project-list-name">{project.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
