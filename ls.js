module.exports = function () {
  console.log('in ls');
  const fs = require('fs')
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err
    } else {
      process.stdout.write(files.join('\n'))
      process.stdout.write("\nprompt > ");
    }
  })

};