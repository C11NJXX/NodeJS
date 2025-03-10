//console.log('Hello C_11nJxx!');
//console.log(window); // no window
//console.log(global);
//console.log(document); // no document
//console.log(progress);

//const generateRandomNumber = require('./utils');
// const {generateRandomNumber,greeting} = require('./utils');
// console.log(`Random Number: ${generateRandomNumber()}`);
// console.log(greeting('C_11nJxx'));

// import { getPosts } from "./postController.js"; //must end with .js

import getPosts, { getPostsLength } from "./postController.js";
console.log(getPosts());
console.log(getPostsLength());
