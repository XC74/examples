const { Command } = require('@agmascripts/core')

// Create a command which will display 'Example' in chat.
module.exports = new Command({
  name: 'example',
  aliases: ['ex'],
  run: (core, args, chatUtils) => {
    chatUtils.set('Example')
  }
})