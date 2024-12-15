import './styles/aboutPage.css';

const AboutPage = () => {
  const profileData = {
    name: "Cameron Boyle",
    number: "#001",
    title: "Full Stack Developer",
    location: "Cardiff, Wales",
    level: "24",
    height: "5'9\"",
    weight: "196lbs",
    experience: "1 YR",
    description: "A passionate Full Stack Developer who caught the coding bug and evolved into a versatile programmer. \nLike a well-trained Pokémon team, my tech stack is balanced and ready for any challenge.\nSpecializing in creating modern web applications, I use React for powerful front-end moves, while my back-end abilities provide strong defense. \nCurrently on a journey to catch all the latest technologies and become a Full Stack Champion!",
    types: ["Framework", "Backend"],
    stats: {
      HP: 85,
      Attack: 90,
      Defense: 75,
      'Sp. Atk': 95,
      'Sp. Def': 85,
      Speed: 88
    },
    moves: [
      { name: "React Frontend", type: "Framework", power: 95 },
      { name: "Node Backend", type: "Backend", power: 60 },
      { name: "Database Design", type: "Backend", power: 90 },
      { name: "UX Design", type: "Style", power: 80 }
    ]
  };

  return (
    <div className="about-page">
      <div className="pokedex-entry">
        <div className="entry-header">
          <div className="pokemon-info">
            <span className="pokemon-number">{profileData.number}</span>
            <h1>{profileData.name}</h1>
          </div>
          <div className="type-badges">
            {profileData.types.map((type) => (
              <span key={type} className={`type-badge ${type.toLowerCase()}`}>
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className="entry-content">
          <div className="left-column">
            <div className="profile-image">
              <img 
                src="https://play.pokemonshowdown.com/sprites/trainers/yellow.png" 
                alt="Yellow Trainer Sprite"
                className="developer-sprite"
                style={{ imageRendering: 'pixelated', width: '160px', height: '160px' }}
              />
              <div className="basic-info">
                <span>HT: {profileData.height}</span>
                <span>WT: {profileData.weight}</span>
              </div>
            </div>
            <div className="pokemon-description">
              <p>{profileData.description}</p>
            </div>
          </div>

          <div className="right-column">
            <div className="stats-section">
              <h2>Base Stats</h2>
              {Object.entries(profileData.stats).map(([stat, value]) => (
                <div key={stat} className="stat-row">
                  <span className="stat-name">{stat}</span>
                  <span className="stat-value">{value}</span>
                  <div className="stat-bar-container">
                    <div 
                      className="stat-bar-fill"
                      style={{ width: `${(value / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="moves-section">
              <h2>Known Moves</h2>
              <div className="moves-grid">
                {profileData.moves.map((move, index) => (
                  <div key={index} className={`move-item ${move.type.toLowerCase()}`}>
                    <span className="move-name">{move.name}</span>
                    <span className="move-type">{move.type}</span>
                    <span className="move-power">{move.power}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
