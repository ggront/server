const http = require('http');
const fs = require('fs');
const path = require('path');
const { threadId } = require('worker_threads');

const PORT = 5000;
const users = [
  { username: 'gront', password: 'g.dolin12' },
  { username: 'kenna', password: 'password' }
];

const server = http.createServer((req, res) => {

  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.join(__dirname, '/login.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      
      if (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }); 

  } else if (req.method === 'POST' && req.url === '/login') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const params = new URLSearchParams(body);
      const username = params.get('username');
      const password = params.get('password');

      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        res.writeHead(302, {Location: '/redirect.html'}).end();

      } else {
        const filePath = path.join(__dirname, 'login.html');
        res.writeHead(302, { Location: '/unauthorized.html' })
        res.end();
        fs.readFile(filePath, 'utf8', (err, data) => {

          if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
          }
          const content = data.replace('{validationMessage}', 'Invalid username or password');
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        });
      }
    });

  } else if (req.method === 'GET' && req.url === '/redirect.html') {
    const filePath = path.join(__dirname, 'redirect.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      
      if (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.method === 'GET') {
    const filePath = path.join(__dirname, req.url);
    fs.readFile(filePath, (err, data) => {
      
      if (err) {
        console.error(err);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File Not Found');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Unsupported request');
  }
});

/* 
Below block will spin up the server and log to the console which port is being utilized
*/

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
