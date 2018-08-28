const fs = require('fs')

// callback:
// fs.readFile('../package.json', (err, data) => {参数
//   // node.js中回调函数格式是约定俗成的，
//   // 有两个参数，第一个参数为err，第二个参数为data
//   if (err) return console.log(err)

//   data = JSON.parse(data)
//   console.log(data.name)
// })

// Promise:
// function readFileAsync (path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (err, data) => {
//       if (err) return reject(err)
//       else resolve(data)
//     })
//   })
// }

// readFileAsync('../package.json')
//   .then(data => {
//     data = JSON.parse(data)
//     console.log(data.name)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// Promisify:
const util = require('util')

util.promisify(fs.readFile)('../package.json')
  .then(JSON.parse)
  .then(data => {
    console.log(data.name)
  })
  .catch(err => {
    console.log(err)
  })