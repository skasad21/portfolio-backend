import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    codelink: { type: String, required: true },
    livelink: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Portfolio', portfolioSchema);