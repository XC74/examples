const { Core } = require('@agmascripts/core');

const Script = new Core();

// Import all commands
const commands = require('./commands');
commands.forEach(command => Script.CommandModule.addCommand(command));

// Test plugin: (EXPERIMENTAL, MAY CHANGE IN FUTURE.)
const TestPlugin = require('./plugins/test');
Script.use(new TestPlugin({
  sayHi: true
}))