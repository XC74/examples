const { Core } = require('@agmascripts/core');

const DEFAULTS = {
  sayHi: false
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