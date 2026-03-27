import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const apiUrl = process.env.QUOTES_API_URL;

    if (!apiUrl) {
      throw new Error("QUOTES_API_URL not defined in .env");
    }

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Quotes API failed");
    }

    const data = await response.json();

    // 🔥 Extract the quote
    const quote = data?.[0]?.q;

    if (!quote) {
      throw new Error("Quote not found in response");
    }

    res.json({ quote });
  } catch (err) {
    console.error("Affirmation route error:", err.message);

    // fallback
    res.json({
      quote: "I am at peace with who I am, and I trust the journey of my life.",
    });
  }
});

export default router;
