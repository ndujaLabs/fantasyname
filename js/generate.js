const path = require('path')
const fs = require('fs')
const NameGen = require('./dragonsnamegen')

const dbPath = path.resolve(__dirname, 'dragonsNames.json')
const dbPath2 = path.resolve(__dirname, 'dragonsNames2.json')
let ed2 = require(dbPath)

let exists = {}
for (let e of ed2) {
  exists[e] = 1
}
let j = 0
function generate(str, t) {
  let generator = NameGen.compile(str)
  for (let i = 0; i < t; i++) {
    let n = generator.toString().split(' ').map(u => u.substring(0, 1).toUpperCase() + u.substring(1)).join(' ')
    if (j++ === 10000) {
      break
    }
    if (exists[n]) {
      i--
      continue
    }
    console.log(n)
    ed2.push(n)
    exists[n] = 1
  }
}

//
// if (names.length >= 11000) {
//   process.exit()
// }

let onlyShow
// onlyShow = true

// generate('BVw', 1500)
// generate('Cvd', 100)
// generate('BvdJ', 1000)
// generate('vBvcv', 100)
// generate('cq', 100)
// generate('CV zv dVz', 300)
// generate('vBvC', 300)
// generate('zv', 100)
// generate('zVsvs', 100)
// generate('V-V CvBvz', 450)
// generate('svzsvdzVd', 200)

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// ed2 = ed2.map(e => {
//   return e.split(' ').map(u => u.substring(0,1).toUpperCase() + u.substring(1)).join(' ')
// })

if (!onlyShow) {
  ed2 = shuffle(ed2)
  ed2 = ed2.slice(0, 10000)
  ed2.push('Agdaroth')
  fs.writeFileSync(dbPath2, JSON.stringify(ed2, null, 2))
}
