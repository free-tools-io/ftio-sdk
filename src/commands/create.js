const {Command, flags} = require('@oclif/command');
var shell = require('shelljs');

class CreateCommand extends Command {
  async run() {
    const {flags} = this.parse(CreateCommand)
    shell.cp('-R', __dirname + '/../tool/*', process.cwd());
    shell.exec('npm install');
    console.log("Created new free-tools.io tool!!!");
    console.log("Start with 'ftio start'");
  }
}

CreateCommand.description = `Describe the command here
...
Extra documentation goes here
`

CreateCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = CreateCommand
