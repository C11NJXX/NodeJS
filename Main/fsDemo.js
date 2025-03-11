import fs from 'fs/promises';
// promise .then() version
/*
fs.readFile('./test.txt', 'utf-8')
    .then((data) => {
        console.log(`then() version: ${data}`);
    })
    .catch((err) => {
        console.log(err);
    });
*/

//promise async await version
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

//write file
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello Node.js!');
        console.log('File written to...')
    } catch (error) {
        console.log(error);
    }
}

//append file
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nHello World!');
        console.log('Appending!');
    } catch (error) {
        console.log(error);
    }
}

writeFile();
appendFile();
readFile();


/* 
import fs from 'fs';

//callback version
fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//Synchronous version
console.log(fs.readFileSync('./test.txt','utf-8'));
*/