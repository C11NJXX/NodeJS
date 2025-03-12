//argv
// console.log(process.argv);
// console.log(process.argv[2])

// process.env
console.log(process.env.LOGNAME);

// process.pid
console.log(process.pid);

// process.cwd() current working directory
console.log(process.cwd());

// process.title
console.log(process.title);

// process.memoryUsage()
console.log(process.memoryUsage());

// process.uptime()
console.log(process.uptime());

// process.exit() with process.on()
process.on('exit', (code) => {
    console.log(`Exit with code: ${code}`);
});

process.exit(0);

console.log("I can't speak qvq");