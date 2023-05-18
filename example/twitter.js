const puppeteer = require('puppeteer');
const ADDRESS = 'https://twitter.com';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(ADDRESS);
  await page.screenshot({path: 'twitter.png'});
  await browser.close();
})();