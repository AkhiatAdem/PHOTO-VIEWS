const http = require('http');
const fs = require('fs');

let img1 = 0;
let img2 = 0;

const server = http.createServer((req, res) => {
    // Set CORS headers to allow requests from any origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    console.log("hellooo");
    
    // Set content type header
    res.setHeader('Content-Type', 'text/plain');

    if (req.method === 'GET' && req.url === '/') {
        res.end('Hello from server!');
    } else if (req.url === '/1') {
        img1++;
        fs.readFile('./img1.html', 'utf8', (err, data) => {
            if (err) {
                return res.end('Error reading file');
            }
            const updatedHtml = data.replace('{{hello}}', img1);
            res.end(updatedHtml);
        });
    } else if (req.url === '/2') {
        img2++;
        res.end('we r on 2');
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const PORT = 5173;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
