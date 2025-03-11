import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/dir3/test.txt';

//basename()
console.log(path.basename(filePath)); // test.txt

//dirname()
console.log(path.dirname(filePath)); // ./dir1/dir2/dir3

// extname() ext => extension
console.log(path.extname(filePath)); // .txt

// parse()
console.log(path.parse(filePath));
/**
 * {
    root: '',
    dir: './dir1/dir2/dir3',
    base: 'test.txt',
    ext: '.txt',
    name: 'test'
}
 */

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(`filename = ${__filename} ,  
dirname = ${__dirname}`);
/**
 * filename = /Users/c_11njxx/Downloads/Learn/NodeJS/Main/pathDemo.js , 
    dirname = /Users/c_11njxx/Downloads/Learn/NodeJS/Main 
   */

const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2); 
///Users/c_11njxx/Downloads/Learn/NodeJS/Main/dir1/dir2/test.txt

const filePath3 = path.resolve(__dirname, 'dir3', 'test.txt');
console.log(filePath3);
///Users/c_11njxx/Downloads/Learn/NodeJS/Main/dir3/test.txt