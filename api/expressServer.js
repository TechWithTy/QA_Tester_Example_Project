const express = require('express');
const { z } = require('zod');
const { chromium } = require('playwright');
const { getSortedArticles } = require('..');

const app = express();
const port = 3000;


app.get('/articles', async (req, res) => {
  try {
    const { isSorted, articles } = await getSortedArticles();
    articlesSchema.parse(articles); // Validate the articles data using Zod
    res.json({ isSorted, articles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
