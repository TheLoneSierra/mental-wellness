import express from "express";
import { protect } from "../middleware/auth.js";
import rateLimit from "express-rate-limit";
import fetch from "node-fetch";

const router = express.Router();

// Rate limiter
const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: {
    error: "Too many messages. Please slow down.",
  },
});

// @route POST /api/chat
router.post("/", protect, chatLimiter, async (req, res) => {
  try {
    const { message } = req.body;

    // Validation
    if (!message || message.trim().length === 0) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (message.length > 500) {
      return res.status(400).json({ error: "Message is too long" });
    }

    // Prompt
    const prompt = `
You are a supportive mental wellness assistant.
Speak in a calm, empathetic, human tone.
Keep responses short and comforting.
IMPORTANT: Provide your response as a single paragraph. Do not use line breaks or multiple paragraphs.
User: ${message}
`;

    // Check if API Key exists
    if (!process.env.GEMINI_API_KEY) {
      console.error(
        "ERROR: GEMINI_API_KEY is not defined in environment variables.",
      );
      return res.status(500).json({ error: "Server configuration error." });
    }

    // Gemini API call - UPDATED TO v1beta
    // Gemini API call - UPDATED TO GEMINI 2.5 FLASH
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      },
    );

    const data = await response.json();

    // ❌ If Gemini returned error
    if (data.error) {
      console.error("Gemini API Error Details:", data.error);
      return res.status(response.status || 500).json({
        error: data.error.message || "Gemini error",
      });
    }

    // ❌ If blocked by safety
    if (data.promptFeedback?.blockReason) {
      console.error(
        "Blocked by Gemini Safety Filters:",
        data.promptFeedback.blockReason,
      );
      return res.json({
        response:
          "I'm here to listen, but I can't discuss that specific topic. Want to share how you're feeling generally?",
      });
    }

    // ✅ Extract AI text
    const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiText) {
      console.error("Unexpected response structure or empty content:", data);
      return res.json({
        response: "I'm here with you. Want to talk more about it?",
      });
    }

    res.json({ response: aiText });
  } catch (error) {
    console.error("Server Error during Chat API call:", error);

    res.status(500).json({
      error: "The AI is taking a moment. Please try again.",
    });
  }
});

export default router;
