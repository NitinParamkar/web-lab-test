const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'GET') {
    if (parsedUrl.pathname === '/') {
      // Serve the form from index.html
      fs.readFile('index.html', (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Error loading form');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else if (parsedUrl.pathname === '/getData') {
      // Handle form submission
      const { name, age } = parsedUrl.query;
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Received name: ${name}, age: ${age}`);
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});



























