const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(bodyParser.json());

// In-memory database
let countries = [];

// Add countries (POST /countries)
app.post('/countries', (req, res) => {
    const newCountries = req.body;

    newCountries.forEach(country => {
        // Check if the country code already exists
        if (countries.some(c => c.code === country.code)) {
            return res.status(400).json({ error: `Country with code '${country.code}' already exists.` });
        }
        countries.push(country);
    });

    res.json({ message: 'Countries added successfully', total_countries: countries.length });
});
app.delete('/countries/:code', (req, res) => {
    const countryCode = req.params.code;

    // Find the country by its code
    const index = countries.findIndex(c => c.code === countryCode);

    if (index === -1) {
        return res.status(404).json({ error: `Country with code '${countryCode}' not found.` });
    }

    // Remove the country from the array
    countries.splice(index, 1);
    res.json({ message: `Country with code '${countryCode}' deleted successfully.` });
});

// Get countries (GET /countries)
app.get('/countries', (req, res) => {
    res.json({ countries });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
