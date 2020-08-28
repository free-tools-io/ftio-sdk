const {Command, flags} = require('@oclif/command')
const server = require('../runtime/server');

class StartCommand extends Command {
  async run() {
    const {flags} = this.parse(StartCommand)
    const name = flags.name || 'world'
    server.start();
  }
}

StartCommand.description = `Describe the command here
...
Extra documentation goes here
`

StartCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = StartCommand
