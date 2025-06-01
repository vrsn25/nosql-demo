// index.js
const express = require('express'); 
const path = require('path'); 
const db = require('./firebase-config');

const app = express(); 


app.use(express.json());


app.use(express.static('public'));


app.post('/users', async (req, res) => {
try {

const { name, email } = req.body;


const docRef = await db.collection('users').add({ name, email });

res.status(201).json({ id: docRef.id });
} catch (err) {

res.status(400).json({ error: err.message });
}
});

const PORT = 3000;

app.listen(PORT, () => {
console.log(`✅ Server running at http://localhost:${PORT}`);
});