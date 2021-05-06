module.exports = function (done) {
  const fs = require('fs')
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;}
    done(files.join('\n'));
  })

};