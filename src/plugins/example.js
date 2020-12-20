const { Core } = require('@agmascripts/core');

const DEFAULTS = {
  // ...
}

module.exports = {
  /**
   * Installation function for plugin
   * @param {Core} core 
   */
  install(core, options = DEFAULTS) {
    options = { ...DEFAULTS, ...options };

    // ...
  }
}