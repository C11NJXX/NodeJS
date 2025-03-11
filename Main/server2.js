import { createServer } from 'http';

const PORT = process.env.PORT;

//hard code
const users = [
    {
        id: 1,
        name: "A"
    },
    {
        id: 2,
        name: "B"
    },
    {
        id: 3,
        name: "C"
    }
];
/*
const server = createServer((req, res) => {
    try {
        if (req.method === 'GET') {
            if (req.url === '/api/users') {
                res.writeHead(200, {
                    'content-type': 'application/json'
                });
                res.write(JSON.stringify(users));
                res.end();
            } else if (req.url.match(/\/api\/users\/([0-9]+)/)) {
                const id = req.url.split('/')[3];
                const user = users.find((user) => user.id === parseInt(id));
                if (user) {
                    res.writeHead(200, {
                        'content-type': 'application/json'
                    });
                    res.end(JSON.stringify(user));
                } else {
                    res.writeHead(404, {
                        'content-type': 'application/json'
                    });
                    res.end(JSON.stringify({ "message": "user not found" }));
                };
            }else {
                throw new Error('404 not found');
            }
        }else {
            throw new Error('method not allowed');
        }
    } catch (error) {
        console.log(error);
        res.writeHead(500,{
            'content-type': 'text/plain'
        });
        res.end('Server error');
    }
});
*/

/*
//add logger middleWare
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const server = createServer((req, res) => {
    logger(req, res, () => {
        try {
            if (req.method === 'GET') {
                if (req.url === '/api/users') {
                    res.writeHead(200, {
                        'content-type': 'application/json'
                    });
                    res.write(JSON.stringify(users));
                    res.end();
                } else if (req.url.match(/\/api\/users\/([0-9]+)/)) {
                    const id = req.url.split('/')[3];
                    const user = users.find((user) => user.id === parseInt(id));
                    if (user) {
                        res.writeHead(200, {
                            'content-type': 'application/json'
                        });
                        res.end(JSON.stringify(user));
                    } else {
                        res.writeHead(404, {
                            'content-type': 'application/json'
                        });
                        res.end(JSON.stringify({ "message": "user not found" }));
                    };
                } else {
                    throw new Error('404 not found');
                }
            } else {
                throw new Error('method not allowed');
            }
        } catch (error) {
            console.log(error);
            res.writeHead(500, {
                'content-type': 'text/plain'
            });
            res.end('Server error');
        }
    });
});

*/

//add logger middleWare
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

//add json middleWare
const jsonMiddleware = (req, res, statusCode, next) => {
    res.writeHead(statusCode, {
        'content-type': 'application/json'
    });
    next();
}

//route handler for GET /api/users
const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
};

//route handler for GET /api/users/:id
const getUserByIdHandle = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if (user) {
        jsonMiddleware(req, res, 200, () => {
            res.end(JSON.stringify(user));
        });
    } else {
        jsonMiddleware(req, res, 404, () => {
            res.end(JSON.stringify({ "message": "user not found" }));
        });
    };
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        try {
            if (req.method === 'GET') {
                if (req.url === '/api/users') {
                    jsonMiddleware(req, res, 200, () => {
                        getUserHandler(req, res);
                    });
                } else if (req.url.match(/\/api\/users\/([0-9]+)/)) {
                    getUserByIdHandle(req, res);
                } else {
                    throw new Error('404 not found');
                }
            } else {
                throw new Error('method not allowed');
            }
        } catch (error) {
            console.log(error);
            res.writeHead(500, {
                'content-type': 'text/plain'
            });
            res.end('Server error');
        }
    });
});


server.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});