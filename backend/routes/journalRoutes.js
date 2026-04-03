import express from "express";
import Journal from "../models/Journal.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// POST /journal
router.post("/", protect, async (req, res) => {
  try {
    const { title, content } = req.body;

    const journal = new Journal({
      title,
      content,
      userId: req.user.id,
    });

    await journal.save();
    res.status(201).json(journal);
  } catch {
    res.status(500).json({ error: "Failed to create journal" });
  }
});

// GET /journal
router.get("/", protect, async (req, res) => {
  try {
    const journals = await Journal.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });

    res.json(journals);
  } catch {
    res.status(500).json({ error: "Failed to fetch journals" });
  }
});

// DELETE /journal/:id
router.delete("/:id", protect, async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);

    if (!journal) return res.status(404).json({ error: "Not found" });

    if (journal.userId.toString() !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    await journal.deleteOne();

    res.json({ message: "Deleted" });
  } catch {
    res.status(500).json({ error: "Delete failed" });
  }
});

export default router;
