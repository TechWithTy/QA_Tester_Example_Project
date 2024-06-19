const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { getSortedArticles } = require('../../index');

let isSorted;
let articles;

Given('the Hacker News newest page is available', async function () {
  // This step is just to ensure the page is available
  // No specific action required here
});

When('I request the first 100 newest articles', async function () {
  const result = await getSortedArticles();
  isSorted = result.isSorted;
  articles = result.articles;
});

Then('the articles should be sorted from newest to oldest', async function () {
  expect(isSorted).toBe(true);
});
