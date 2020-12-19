const { Plugin, Core } = require('@agmascripts/core');

const DEFAULTS = {
  sayHi: false
}

module.exports = class TestPlugin extends Plugin {

  constructor(options = DEFAULTS) {
    super();

    this.options = { ...DEFAULTS, ...options };
  }

  /**
   * Installation function, runs on `Script.use(plugin)`.
   * @param {Core} core 
   */
  install(core) {
    const options = this.options;

    if (options.sayHi) {
      console.log('Hi from TestPlugin!')
    }
  }
}