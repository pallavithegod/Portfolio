const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
    res.send('Pallavi Portfolio API is running');
});

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: "ok" });
});

// Mock Endpoints for now (to be replaced with logic later)
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`[CONTACT FORM] Name: ${name}, Email: ${email}, Message: ${message}`);
    // Placeholder for email sending logic
    res.json({ success: true, message: "Message received!" });
});

app.post('/api/fact', (req, res) => {
    const { name, email, fact } = req.body;
    console.log(`[FACT SHARE] Name: ${name}, Email: ${email}, Fact: ${fact}`);
    // Placeholder for fact email sending logic
    res.json({ success: true, message: "Fact received! Thanks for sharing." });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
