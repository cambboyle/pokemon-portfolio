// Map tech categories to Pokemon types
const categoryToType = {
  Framework: 'fire',       // Fire type for powerful frameworks
  FrontendLang: 'electric', // Electric type for dynamic frontend languages
  BackendLang: 'grass',    // Grass type for backend growth and processing
  Markup: 'water',         // Water type for flowing, adaptable markup
  Style: 'fairy',         // Fairy type for making things beautiful
  Version: 'ghost',        // Ghost type for version control (moving through history)
};

// Map tech skills to Pokemon sprites (transparent versions)
// Using Gen 1 Pokemon for the 90s theme - limited to 6 core skills
const techToPokemon = {
  // Framework
  'React': {
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    level: 78,
    type: 'Framework',
    secondaryType: 'flying'  // Charizard is Fire/Flying
  },

  // Frontend Language
  'JavaScript': {
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    level: 85,
    type: 'FrontendLang',
    secondaryType: null     // Pikachu - pure Electric type
  },

  // Backend Language
  'Python': {
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    level: 75,
    type: 'BackendLang',
    secondaryType: 'poison'  // Venusaur is Grass/Poison
  },

  // Markup
  'HTML': {
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    level: 82,
    type: 'Markup',
    secondaryType: 'ice'    // Lapras is Water/Ice
  },

  // Styling
  'CSS': {
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
    level: 80,
    type: 'Style',
    secondaryType: null     // Clefable - pure Fairy type
  },

  // Version Control
  'Git': {
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    level: 76,
    type: 'Version',
    secondaryType: 'poison'  // Gengar is Ghost/Poison
  }
};

// Get the appropriate Pokemon sprite for a tech skill
export const getTechSprite = (techName) => {
  return techToPokemon[techName]?.sprite || techToPokemon['Git'].sprite;
};

// Get the Pokemon type for a tech category
export const getTechType = (category) => {
  return categoryToType[category] || 'normal';
};

// Get the Pokemon level for a tech skill
export const getTechLevel = (techName) => {
  return techToPokemon[techName]?.level || 50;
};

// Get secondary type for a tech skill
export const getSecondaryType = (techName) => {
  return techToPokemon[techName]?.secondaryType || null;
};

// Export the mappings for reference
export const TECH_TYPES = categoryToType;
export const TECH_POKEMON = techToPokemon;
