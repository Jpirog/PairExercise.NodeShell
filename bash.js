const pwd = require('./pwd');
const ls = require('./ls');

// output a prompt
process.stdout.write('prompt > ');
// The stdin 'data' event fires after user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //removes /n
    if (cmd === 'pwd'){
        pwd();
    } else if (cmd === 'ls') {
        ls(); 
    }
    else {
        process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write(`\nprompt > `);
});
