const { Core } = require('@agmascripts/core');

const Script = new Core();

// Import all commands
const commands = require('./commands');
commands.forEach(command => Script.CommandModule.addCommand(command));