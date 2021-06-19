const fs = require('fs')
// const book = {
//     title: 'Ego is hte Enemy',
//     author: 'Ryan Holiday'
// }

// // Convert javascript object into JSON string
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('json01.json',bookJSON)

// // Convert JSON string into javascript object;
// const bookObject = JSON.parse(bookJSON)

// console.log(bookObject.title)

const jsonBuffer = fs.readFileSync('json01.json')
console.log(jsonBuffer)
const jsonData = jsonBuffer.toString()
console.log(jsonData)
const jsonParsed = JSON.parse(jsonData)
console.log(jsonParsed.title)
