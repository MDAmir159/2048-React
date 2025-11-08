import appConfig from './appConfig.json';

/**
 * Configuration utility for managing app settings, colors, and assets
 */
class ConfigManager {
  constructor() {
    this.config = appConfig;
  }

  /**
   * Get theme colors
   * @returns {Object} Color configuration object
   */
  getColors() {
    return this.config.theme.colors;
  }

  /**
   * Get specific color by path (e.g., 'primary.main', 'text.secondary')
   * @param {string} path - Dot notation path to the color
   * @returns {string} Color value
   */
  getColor(path) {
    const keys = path.split('.');
    let result = this.config.theme.colors;
    
    for (const key of keys) {
      result = result[key];
      if (!result) {
        console.warn(`Color path '${path}' not found in configuration`);
        return null;
      }
    }
    
    return result;
  }

  /**
   * Get image paths
   * @returns {Object} Image paths configuration object
   */
  getImages() {
    return this.config.assets.images;
  }

  /**
   * Get specific image path by key
   * @param {string} category - Image category (tiles, gameAssets, etc.)
   * @param {string} key - Image key
   * @returns {string} Image path
   */
  getImagePath(category, key) {
    const categoryImages = this.config.assets.images[category];
    if (!categoryImages) {
      console.warn(`Image category '${category}' not found in configuration`);
      return null;
    }
    
    const imagePath = categoryImages[key];
    if (!imagePath) {
      console.warn(`Image '${key}' not found in category '${category}'`);
      return null;
    }
    
    return imagePath;
  }

  /**
   * Get tile image path by tile value
   * @param {number} tileValue - The tile value (2, 4, 8, etc.)
   * @returns {string} Image path
   */
  getTileImage(tileValue) {
    return this.getImagePath('tiles', tileValue.toString());
  }

  /**
   * Get cupcake data
   * @returns {Array} Array of cupcake objects
   */
  getCupcakes() {
    return this.config.gameData.cupcakes.map(cupcake => ({
      ...cupcake,
      cakeImg: this.getTileImage(cupcake.value),
      cakeName: cupcake.name,
      cakeCallories: cupcake.calories
    }));
  }

  /**
   * Get cupcake by tile value
   * @param {number} tileValue - The tile value
   * @returns {Object} Cupcake object
   */
  getCupcakeByValue(tileValue) {
    const cupcake = this.config.gameData.cupcakes.find(c => c.value === tileValue);
    if (!cupcake) {
      console.warn(`Cupcake with value '${tileValue}' not found`);
      return null;
    }
    
    return {
      ...cupcake,
      cakeImg: this.getTileImage(cupcake.value),
      cakeName: cupcake.name,
      cakeCallories: cupcake.calories
    };
  }

  /**
   * Get game data
   * @returns {Object} Game data configuration
   */
  getGameData() {
    return this.config.gameData;
  }

  /**
   * Get UI configuration
   * @returns {Object} UI configuration object
   */
  getUIConfig() {
    return this.config.ui;
  }

  /**
   * Get font paths
   * @returns {Object} Font paths configuration
   */
  getFonts() {
    return this.config.assets.fonts;
  }

  /**
   * Generate CSS custom properties from colors
   * @returns {Object} CSS custom properties object
   */
  getCSSVariables() {
    const colors = this.getColors();
    const ui = this.getUIConfig();
    const cssVars = {};

    const flattenColors = (obj, prefix = '') => {
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        const varName = prefix ? `${prefix}-${key}` : key;
        
        if (typeof value === 'string') {
          cssVars[`--color-${varName}`] = value;
        } else if (typeof value === 'object') {
          flattenColors(value, varName);
        }
      });
    };

    const flattenUI = (obj, prefix = '') => {
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        const varName = prefix ? `${prefix}-${key}` : key;
        
        if (typeof value === 'string') {
          cssVars[`--${varName}`] = value;
        } else if (typeof value === 'object') {
          flattenUI(value, varName);
        }
      });
    };

    flattenColors(colors);
    flattenUI(ui);
    return cssVars;
  }

  /**
   * Apply CSS variables to document root
   */
  applyCSSVariables() {
    const cssVars = this.getCSSVariables();
    const root = document.documentElement;
    
    Object.keys(cssVars).forEach(varName => {
      root.style.setProperty(varName, cssVars[varName]);
    });
  }
}

// Create and export a singleton instance
const configManager = new ConfigManager();

export default configManager;

// Export individual methods for convenience
export const {
  getColors,
  getColor,
  getImages,
  getImagePath,
  getTileImage,
  getCupcakes,
  getCupcakeByValue,
  getGameData,
  getUIConfig,
  getFonts,
  getCSSVariables,
  applyCSSVariables
} = configManager;