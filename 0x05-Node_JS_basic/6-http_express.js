const express = require('express');

// Create an Express application
const app = express();

// Set the port number to 1245
const port = 1245;

// Define a route for the root URL ("/")
app.get('/', (request, response) => {
  // Respond with the message 'Hello Holberton School!'
  response.send('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the Express application for external use (e.g., testing)
module.exports = app;
