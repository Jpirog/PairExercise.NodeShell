// we can access the pwd function and store it in a variable like so
const cat = require('./cat');
const ls = require('./ls');
const pwd = require('./pwd');
const curl = require('./curl');
const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  switch (true){
    case cmd === 'pwd':
      pwd(done);
      break;
    case cmd === 'ls':
      ls(done);
      break;
    case cmd.startsWith('cat'):
      cat(cmd.split(' ')[1], done);
      break;
    case cmd.startsWith("curl"):
      curl(cmd.split(' ')[1], done);
      break;
    case cmd === ("quit"):
      process.exit();
    default:
      process.stdout.write('You typed: ' + cmd);
  } // end switch

  //process.stdout.write(`\nprompt > `);
});