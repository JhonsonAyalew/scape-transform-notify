const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));

app.listen(3000, () => console.log('Node API listening on :3000'));
