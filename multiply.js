const fs = require('fs')

const listTable = (b, l) => {
  return new Promise(( resolve, reject ) => {
    if (!Number(b)) return reject(`El valor introducido ${ b } no es un numero!`)
    let table = ''
    for ( let i = 1; i <= l; i++ ) {
      table += `${b} * ${i} = ${b*i} \n`
    }
    console.log(table)
    resolve(`Table ${ b }`)
  })
}

const createTableFile = (b, l) => {
  return new Promise(( resolve, reject ) => {
    if (!Number(b)) return reject(`El valor introducido ${ b } no es un numero!`)
    let table = ''
    for ( let i = 1; i <= l; i++ ) {
      table += `${b} * ${i} = ${b*i} \n`
    }
    
    fs.writeFile( `tables/table-${ b }.txt`, table, err => {
      if (err) reject(err)
      resolve(`table-${ b }.txt`)
    })
  })
}

module.exports = {
  listTable,
  createTableFile
}
