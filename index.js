// index.js
const http = require('http');

const PORT = 3000; // You can change this to any port you like

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World from EC2 Node.js!\n');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
