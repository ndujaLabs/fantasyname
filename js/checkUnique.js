const path = require('path')
const fs = require('fs')
const NameGen = require('./dragonsnamegen')

const dbPath2 = path.resolve(__dirname, 'dragonsNames2.json')
let ed2 = require(dbPath2)

let exists = {}
for (let i = 0; i < ed2.length; i++) {
  let n = ed2[i]
  if (exists[n]) {
    console.log(n)
  }
  exists[n] = 1
}

console.log(ed2.length)
