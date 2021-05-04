// we can access the pwd function and store it in a variable like so
const cat = require('./cat');
const ls = require('./ls');
const pwd = require('./pwd');
const curl = require('./curl');
//output a prompt
process.stdout.write('prompt > ');
//The stdin 'data' event fires after user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //removes /n
    
    if (cmd === 'pwd'){
        pwd()
    } else if (cmd === 'ls'){
        ls()
    } else if (cmd.startsWith('cat')){
        cat(cmd.split(' ')[1])
    }else if (cmd.startsWith("curl")){
        curl(cmd.split(' ')[1])
    }
    else {
        process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write(`\nprompt > `);
});