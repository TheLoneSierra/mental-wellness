import express from "express";
import Mood from "../models/Mood.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// 🔹 POST /moods → Create mood
router.post("/", protect, async (req, res) => {
  try {
    const { moodType, note } = req.body;

    const mood = new Mood({
      moodType,
      note,
      userId: req.user.id,
    });

    await mood.save();

    res.status(201).json(mood);
  } catch (err) {
    res.status(500).json({ error: "Failed to create mood" });
  }
});

// 🔹 GET /moods → Get logged-in user's moods
router.get("/", protect, async (req, res) => {
  try {
    const moods = await Mood.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });

    res.json(moods);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch moods" });
  }
});

// 🔹 DELETE /moods/:id
router.delete("/:id", protect, async (req, res) => {
  try {
    const mood = await Mood.findById(req.params.id);

    if (!mood) {
      return res.status(404).json({ error: "Mood not found" });
    }

    // 🔴 CRITICAL CHECK (you would've skipped this)
    if (mood.userId.toString() !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    await mood.deleteOne();

    res.json({ message: "Mood deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete mood" });
  }
});

export default router;
