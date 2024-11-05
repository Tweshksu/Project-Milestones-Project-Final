const app = require('express')();
const port = 8080;

// Middleware to parse URL-encoded bodies
app.use((require('express')).urlencoded({ extended: true }));

// Serve the HTML file on GET request to the root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const username = req.body.username; // Access form data
    // Add validation logic here if needed
    res.send(`Username is ${username}`); // Correctly reference username
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
