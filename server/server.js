import express from "express";
import "./config/db.js";
import app from "./app.js"; // Import the app from app.js

const serverApp = express(); // Create a new express application instance

// Middleware to parse JSON bodies
serverApp.use(express.json());

// Mount the app middleware onto serverApp
serverApp.use(app);

import("dotenv");
const PORT = process.env.PORT || 3000;

serverApp.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
