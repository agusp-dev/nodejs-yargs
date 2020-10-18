const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limit: {
    alias: 'l',
    default: 10
  }
}

const argv = require('yargs')
  .command('list', 'Print table in console', opts)
  .command('create', 'Create table in file', opts)
  .argv

module.exports = {
  argv
}