const http = require('http');
const personalModule = require('./personalmodule.js');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const userName = 'User'; 
  const greeting = personalModule.getGreeting(userName);
  const requestDate = new Date().toString(); 

  const htmlResponse = `
    <html>
      <head>
        <title>Greeting Page</title>
      </head>
      <body>
        <p>Date of request: ${requestDate}</p>
        <p>${greeting}</p>
      </body>
    </html>
  `;

  res.end(htmlResponse);
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
