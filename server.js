const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse incoming form payloads cleanly
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DATA_FILE = path.join(__dirname, 'inquiries.json');

// Helper to safely read records from local JSON database file
function readInquiries() {
    if (!fs.existsSync(DATA_FILE)) {
        // Create an empty array file if it doesn't exist yet
        fs.writeFileSync(DATA_FILE, JSON.stringify([]));
        return [];
    }
    try {
        const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(fileContent || '[]');
    } catch (err) {
        return [];
    }
}

// ROUTE 1: Explicitly serve the HTML structure
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ROUTE 2: Explicitly serve the stylesheet with the exact header browsers demand
app.get('/styles.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'styles.css'));
});

// ROUTE 3: API endpoint to receive wholesale inquiry records
app.post('/api/inquire', (req, res) => {
    const { name, email, tons, commodity } = req.body;
    
    if (!name || !email || !tons || !commodity) {
        return res.status(400).json({ success: false, message: 'All fields are strictly required.' });
    }

    const newInquiry = {
        id: Date.now(),
        name,
        email,
        tons: parseInt(tons, 10),
        commodity,
        timestamp: new Date().toLocaleString()
    };

    const currentList = readInquiries();
    currentList.push(newInquiry);

    // Save records back into the inquiries.json file
    fs.writeFileSync(DATA_FILE, JSON.stringify(currentList, null, 2));
    
    return res.json({ success: true, message: 'Inquiry securely logged!', data: newInquiry });
});

// ROUTE 4: API endpoint to stream data arrays into our simulator dashboard table
app.get('/api/inquiries', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(readInquiries());
});

// Start listening for traffic
app.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`🚀 DAYTONA-tec Full-Stack Server running at:`);
    console.log(`   http://localhost:${PORT}`);
    console.log(`=================================================`);
});