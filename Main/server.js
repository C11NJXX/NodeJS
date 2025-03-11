import http from 'http';

// const PORT = 8000;
const PORT = process.env.PORT;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('200 OK');
//     res.end();
// });

// server.listen(PORT, () => {
//     console.log(`Server is running on PORT:${PORT}`);
// });

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     res.end('<h1>200 OK!</h1>');
// });

// server.listen(PORT, () => {
//     console.log(`Server is running on PORT:${PORT}`);
// });

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/json'
//     });
//     res.end(JSON.stringify({
//         id: 3,
//         name: 'C_11nJxx'
//     }));
// });

const server = http.createServer((req,res) => {
    res.writeHead(200,{
        'content-type': 'text/plain'
    });
    res.end(`Request url: ${req.url}
Request method: ${req.method}`);
});

server.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});