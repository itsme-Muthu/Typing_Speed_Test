const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json()); 
app.use(express.static('../frontend')); // Serving the frontend files

// connecting the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'Rmuthu@2022', 
    database: 'typing_test' 
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

// Function to fetch the highest WPM
function fetchHighestWPM(callback) {
    const query = 'SELECT highest_wpm FROM highscores ORDER BY id DESC LIMIT 1'; 
    db.query(query, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results[0] ? results[0].highest_wpm : 0);
    });
}

// Function to update the highest WPM
function updateHighestWPM(wpm) {
    const query = 'INSERT INTO highscores (highest_wpm) VALUES (?)'; 
    db.query(query, [wpm], (err) => {
        if (err) {
            console.error('Error updating highest WPM:', err);
        }
    });
}

// Fetch highest WPM endpoint
app.get('/api/highest-wpm', (req, res) => {
    fetchHighestWPM((err, highestWPM) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ highestWPM });
    });
});

// Update highest WPM endpoint
app.post('/api/highest-wpm', (req, res) => {
    const { highestWPM } = req.body; 
    updateHighestWPM(highestWPM);
    res.sendStatus(200);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
