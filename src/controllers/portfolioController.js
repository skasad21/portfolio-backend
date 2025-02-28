import Portfolio from '../models/Portfolio.js';

// Create Portfolio
export const createPortfolio = async (req, res) => {
  const { title, description, img, codelink, livelink } = req.body;
  try {
    const portfolio = new Portfolio({ title, description, img, codelink, livelink, user: req.user.id });
    await portfolio.save();
    res.status(201).json(portfolio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Portfolios
export const getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find({ user: req.user.id });
    res.status(200).json(portfolios);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update Portfolio
export const updatePortfolio = async (req, res) => {
  const { id } = req.params;
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(portfolio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Portfolio
export const deletePortfolio = async (req, res) => {
  const { id } = req.params;
  try {
    await Portfolio.findByIdAndDelete(id);
    res.status(200).json({ message: 'Portfolio deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};