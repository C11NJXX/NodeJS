```javascript
const server = http.createServer((req, res) => {
    try {
        //check if GET method
        if (req.method === 'GET') {
            //simple route
            if (req.url === '/') {
                res.writeHead(200, {
                    'content-type': 'text/html'
                });
                res.end(`<h1>HomePage</h1>`);
            } else if (req.url === '/about') {
                res.writeHead(200, {
                    'content-type': 'text/html'
                });
                res.end(`<h1>About</h1>`);
            }else {
                res.writeHead(404, {
                    'content-type': 'text/html'
                });
                res.end(`<h1>404 Not Found</h1>`);
            }
        } else {
            throw new Error('Server Error');
        }
    } catch (error) {
        res.writeHead(500,{
            'content-type':'text/plain'
        });
        res.end('Server Error');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
```