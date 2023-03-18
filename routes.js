const fs = require('fs')

const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;
    if(url === '/') {
        response.setHeader('Content-Type', 'text/html')
        response.write('<html>')
        response.write('<head><title>Node.JS Server</title></head>')
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        response.write('</html>')
        return response.end();
    }
    
    if(url === '/message' && method === 'POST'){
        const body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('backEnd.txt', message, (err) => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });
        });
    };
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Node.js</title></head>');
    response.write('<body><h1>Testing Node.js</h1></body>');
    response.write('</html>');
};

module.exports = requestHandler;