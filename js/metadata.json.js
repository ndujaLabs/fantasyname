const fs = require('fs')
const path= require('path')
const parse = require('csv-parse/lib/sync')

const data = fs.readFileSync(path.resolve(__dirname, 'EverDragons2_10k_DNAs.csv'), 'utf8')

const json = parse(data, {
  columns: true
})

console.log(JSON.stringify(json, null, 2))


