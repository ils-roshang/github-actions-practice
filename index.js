const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// simple route
app.get('/', (req, res) => {
  res.send('<h1>Hello from Cloud Run 🚀</h1>');
});

// start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
