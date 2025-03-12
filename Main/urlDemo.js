import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

//use the object
const urlObj = new URL(urlString);
console.log(urlObj);

//format()
console.log(url.format(urlObj));

//import.meta.url => file url
console.log(import.meta.url);

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

// console.log(urlObj.href);
// console.log(urlObj.origin);

console.log(urlObj.search);
const params = new URLSearchParams(urlObj.search);
params.append('limit', '3');
console.log(params.get('q'));
params.delete('q');
console.log(params);