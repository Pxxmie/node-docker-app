const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/mydatabase";

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
    res.send("Hello, Docker with MongoDB!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});