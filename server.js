const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'data', 'hse_database.json');

app.use(express.json());
app.use(express.static(__dirname));

// API Endpoint to GET all data
app.get('/api/database', (req, res) => {
  fs.readFile(DB_PATH, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read database file.' });
    }
    res.json(JSON.parse(data));
  });
});

// API Endpoint to SAVE all data directly into data/hse_database.json
app.post('/api/database', (req, res) => {
  const newDbData = req.body;
  fs.writeFile(DB_PATH, JSON.stringify(newDbData, null, 2), 'utf8', (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to write to database file.' });
    }
    res.json({ success: true, message: 'Database saved to folder file!' });
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`  HSE Task Manager Central Network Server Active!`);
  console.log(`  Access locally: http://localhost:${PORT}`);
  console.log(`  Share over Email / Network: http://<YOUR-IP-ADDRESS>:${PORT}`);
  console.log(`====================================================`);
});
