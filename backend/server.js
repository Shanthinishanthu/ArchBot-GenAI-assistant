const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/ping', (req, res) => {
    res.json({ message: "ArchBot backend is running" });
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
