import express from "express";
import Insight from "../models/Insight.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// CREATE
router.post("/", protect, async (req, res) => {
  const { title, content } = req.body;

  const insight = new Insight({
    title,
    content,
    userId: req.user.id,
  });

  await insight.save();
  res.status(201).json(insight);
});

// GET
router.get("/", protect, async (req, res) => {
  const insights = await Insight.find({ userId: req.user.id }).sort({
    createdAt: -1,
  });

  res.json(insights);
});

// DELETE
router.delete("/:id", protect, async (req, res) => {
  const insight = await Insight.findById(req.params.id);

  if (!insight) return res.status(404).json({ error: "Not found" });

  if (insight.userId.toString() !== req.user.id) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  await insight.deleteOne();

  res.json({ message: "Deleted" });
});

export default router;
