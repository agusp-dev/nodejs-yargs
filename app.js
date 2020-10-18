const argv = require('./config/yargs').argv
const multiplyLib = require('./multiply')

const { base, limit } = argv

switch (argv._[0]) {
  case 'list':
    multiplyLib.listTable(base, limit)
      .then( table => console.log(`${table} listed!`))
      .catch( err => console.log(`Error: ${err}`))
    break
  case 'create':
    multiplyLib.createTableFile(base, limit)
      .then( filename => console.log(`File ${filename} created!`))
      .catch( err => console.log(`Error: ${err}`))
    break
  default: console.log('No valid command found')
}



