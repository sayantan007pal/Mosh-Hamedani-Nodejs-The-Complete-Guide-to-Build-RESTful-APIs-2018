
const os = require('os')

var totalMemory = os.totalmem()
var freeMemory = os.freemem()
console.log("Total Memory: " + totalMemory + "     Free Memory: " + freeMemory)


//Template string 
console.log(`Total Memory: ${totalMemory} `)
console.log(`Free Memory: ${freeMemory} `)