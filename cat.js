module.exports = function(file) {
  const fs = require('fs');
  console.log(fs.readFile(file, (err, result) => {
      if (err) {
          console.error(err)
          return
      }
      console.log(result.toString());
      process.stdout.write("\nprompt > ");
  }));
}