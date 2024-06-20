const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue');
});

// Recevoir les données
app.post('/receive', (req, res) => {
    console.log("Received URL:", req.body.url);
    res.send('Data received');
});

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
