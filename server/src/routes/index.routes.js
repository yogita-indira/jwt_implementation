// index.routes.js
import express from 'express';
import AuthRoutes from './auth.routes.js';

const router = express.Router();

// Initialize routes
router.use('/auth', AuthRoutes);
// Add more route initialization as needed

export default router;
