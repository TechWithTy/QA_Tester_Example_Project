const { chromium } = require('playwright');


 async function getSortedArticles() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://news.ycombinator.com/newest');
  await page.waitForSelector('span.age');

  let articles = [];
  let hasNextPage = true;

  while (articles.length < 100 && hasNextPage) {
    const newArticles = await page.$$eval('.athing', (items) => {
      return items.map(item => {
        const rank = item.querySelector('.rank')?.innerText.replace('.', '') || '';
        const title = item.querySelector('.titleline a')?.innerText || '';
        const url = item.querySelector('.titleline a')?.href || '';
        const site = item.querySelector('.sitestr')?.innerText || 'news.ycombinator.com';
        const age = item.nextElementSibling.querySelector('.age')?.title || '';
        const id = item.id || '';
        return { rank, title, url, site, age, id };
      });
    });

    articles = articles.concat(newArticles);

    hasNextPage = await page.$('.morelink') !== null;
    if (hasNextPage) {
      await Promise.all([
        page.waitForNavigation(),
        page.click('.morelink')
      ]);
    }
  }

  if (articles.length > 100) {
    articles = articles.slice(0, 100);
  }

  let isSorted = true;
  for (let i = 1; i < articles.length; i++) {
    if (new Date(articles[i].age) > new Date(articles[i - 1].age)) {
      isSorted = false;
      break;
    }
  }

  await browser.close();
  console.log(isSorted, articles, articles.length)
  return { isSorted, articles };
}
getSortedArticles()
module.exports = { getSortedArticles };
