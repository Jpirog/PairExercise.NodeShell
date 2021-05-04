
module.exports = function (url) {
  console.log('in curl', url);
  const request = require('request')
  request(url, { json: true }, (err, res, body) => {
    if (err) { 
      console.log('error');
      return console.log(err); 
    }
    else {
      console.log('it worked!')
      console.log("First 500 characters:\n");
      console.log(body.substr(0,500))
      }
      process.stdout.write("\nprompt > ");
});

};