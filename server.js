cat << 'EOF' > server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DATA_FILE = path.join(__dirname, 'inquiries.json');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dayomichael1970@gmail.com',
        pass: 'your_16_character_app_password_here' 
    }
});

function readInquiries() {
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify());
        return;
    }
    try {
        const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(fileContent || '');
    } catch (err) {
        return;
    }
}

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/styles.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'styles.css'));
});

app.post('/api/inquire', (req, res) => {
    const { name, email, tons, commodity } = req.body;
    if (!name || !email || !tons || !commodity) {
        return res.status(400).json({ success: false, message: 'Fields missing.' });
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
    fs.writeFileSync(DATA_FILE, JSON.stringify(currentList, null, 2));

    const mailOptions = {
        from: 'DAYTONA-tec Trading Desk <dayomichael1970@gmail.com>',
        to: 'dayomichael1970@gmail.com',
        subject: `🚨 New Bulk Order Request: ${tons} MT of ${commodity}`,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e3e7ed; border-radius: 12px; max-width: 600px;">
                <h2 style="color: #00875a; margin-bottom: 5px;">DAYTONA-tec Trading Desk Alert</h2>
                <hr style="border: 0; border-top: 1px solid #e3e7ed; margin: 20px 0;">
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr><td style="padding: 8px 0; color: #6c7a89;"><b>Buyer / Company:</b></td><td style="padding: 8px 0;">${name}</td></tr>
                    <tr><td style="padding: 8px 0; color: #6c7a89;"><b>Corporate Email:</b></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                    <tr><td style="padding: 8px 0; color: #6c7a89;"><b>Commodity Parameter:</b></td><td style="padding: 8px 0;">${commodity}</td></tr>
                    <tr><td style="padding: 8px 0; color: #6c7a89;"><b>Target Volume:</b></td><td style="padding: 8px 0; font-weight: bold; color: #00875a;">${tons} MT</td></tr>
                </table>
            </div>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.error('Mail failure:', error);
        else console.log('Email sent: ' + info.response);
    });

    return res.json({ success: true, message: 'Logged!', data: newInquiry });
});

app.get('/api/inquiries', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(readInquiries());
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
EOFcat << 'EOF' > server.js
cost express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DATA_FILE = path.join(__dirname, 'inquiries.json');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dayomichael1970@gmail.com',
        pass: 'glbh sjuc dtfx hzgd' 
    }
});

function readInquiries() {
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify());
        return;
    }
    try {
        const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(fileContent || '');
    } catch (err) {
        return;
    }
}

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/styles.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'styles.css'));
});

app.post('/api/inquire', (req, res) => {
    const { name, email, tons, commodity } = req.body;
    if (!name || !email || !tons || !commodity) {
        return res.status(400).json({ success: false, message: 'Fields missing.' });
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
    fs.writeFileSync(DATA_FILE, JSON.stringify(currentList, null, 2));

    const mailOptions = {
        from: 'DAYTONA-tec Trading Desk <dayomichael1970@gmail.com>',
        to: 'dayomichael1970@gmail.com',
        subject: `🚨 New Bulk Order Request: ${tons} MT of ${commodity}`,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e3e7ed; border-radius: 12px; max-width: 600px;">
                <h2 style="color: #00875a; margin-bottom: 5px;">DAYTONA-tec Trading Desk Alert</h2>
                <hr style="border: 0; border-top: 1px solid #e3e7ed; margin: 20px 0;">
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr><td style="padding: 8px 0; color: #6c7a89;"><b>Buyer / Company:</b></td><td style="padding: 8px 0;">${name}</td></tr>
                    <tr><td style="padding: 8px 0; color: #6c7a89;"><b>Corporate Email:</b></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                    <tr><td style="padding: 8px 0; color: #6c7a89;"><b>Commodity Parameter:</b></td><td style="padding: 8px 0;">${commodity}</td></tr>
                    <tr><td style="padding: 8px 0; color: #6c7a89;"><b>Target Volume:</b></td><td style="padding: 8px 0; font-weight: bold; color: #00875a;">${tons} MT</td></tr>
                </table>
            </div>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.error('Mail failure:', error);
        else console.log('Email sent: ' + info.response);
    });

    return res.json({ success: true, message: 'Logged!', data: newInquiry });
});

app.get('/api/inquiries', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(readInquiries());
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
EOF
