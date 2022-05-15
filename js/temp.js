
let nn = {}


for (let n of names) {
  if (!/ /.test(n) && n.length < 10) {
    nn[n] = 1
    console.log(n)
  }
}

const fs = require('fs')
fs.writeFileSync(__dirname + '/mom.json', JSON.stringify(Object.keys(nn), null, 2))

