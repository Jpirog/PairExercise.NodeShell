
module.exports = function (url, done) {
  const request = require('request')
  request(url, (err, res, body) => {
    if (err) { 
      done(`Error - ${err.toString().substr(0,100)}`);
    }
    else {
      done(`Success - First 500 characters:\n ${body.substr(0,500)}`);
    }
});

};