import express from 'express';
import {
  createPortfolio,
  getPortfolios,
  updatePortfolio,
  deletePortfolio,
} from '../controllers/portfolioController.js';
import authMiddleware from '../middleware/authMiddleware.js'; // Correct import

const router = express.Router();

router.post('/', authMiddleware, createPortfolio);
router.get('/', authMiddleware, getPortfolios);
router.put('/:id', authMiddleware, updatePortfolio);
router.delete('/:id', authMiddleware, deletePortfolio);

export default router;