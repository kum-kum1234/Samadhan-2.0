// Install express first using: npm install express

const express = require("express");
const app = express();
const PORT = 3000;

// API endpoint
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
