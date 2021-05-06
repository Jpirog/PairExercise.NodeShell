module.exports = function(file, done) {
  const fs = require('fs');
  fs.readFile(file, (err, result) => {
    if (err) {
      done(`${file} does not exist`)
    }else {
      done(result.toString());
    }
  });
}