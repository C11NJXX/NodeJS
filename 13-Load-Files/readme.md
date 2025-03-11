```
几个新鲜的module以及api
```

```
import 确实是一个用于导入模块的关键词，但在 ES6 模块中，它还有一个特殊的属性 import.meta。import.meta 是一个包含关于当前模块元数据的对象。

import.meta 是一个对象，包含当前模块的元数据。import.meta.url 是一个字符串，表示当前模块的 URL。

以下是一些关键点：
import.meta 是一个对象，包含当前模块的元数据。
import.meta.url 是一个字符串，表示当前模块的 URL。
url.fileURLToPath 是一个 Node.js 提供的函数，用于将文件 URL 转换为文件路径。
所以，import.meta.url 提供了当前模块的 URL，而 url.fileURLToPath 将这个 URL 转换为文件路径，赋值给 __filename。
```

```javascript
import url from 'url';
import path from 'path';
import fs from 'fs/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    try {
        //check if GET method
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not Fount');
            };
            const data = await fs.readFile(filePath);
            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.end(data);
        } else {
            throw new Error('Method Denied');
        }
    } catch (error) {
        res.writeHead(500, {
            'content-type': 'text/plain'
        });
        res.end('Server Error');
    }
});
```