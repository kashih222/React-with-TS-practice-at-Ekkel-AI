const connectToMongo = require("./Db");
const express = require('express');
var cors = require('cors')
var app = express()
app.use(cors());

connectToMongo();


const port = 5000;

// Middleware
app.use(express.json());

// Route Imports
const authRoutes = require('./Routes/auth');
const noteRoutes = require('./Routes/note');

// Route Mounting
app.use('/api/auth', authRoutes);
app.use('/api/note', noteRoutes);

// Start Server
app.listen(port, () => {
  console.log(`✅ Server listening on http://localhost:${port}`);
});
