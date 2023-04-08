const readline = require('readline')

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

interface.question('Wassup?', function (message) {
  console.log(message)
  interface.close()
})
