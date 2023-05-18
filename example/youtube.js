const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // 访问 YouTube 网站
  await page.goto('https://www.youtube.com/');
  
  // 在搜索框中输入关键词，并点击搜索按钮
  const searchInput = await page.$('input#search');
  await searchInput.type('funny cat videos', { delay: 100 });
  const searchButton = await page.$('button#search-icon-legacy');
  await searchButton.click();
  
  // 获取搜索结果页面中第一个视频的 URL 和标题
  const videoElement = await page.waitForSelector('a#video-title');
  const videoUrl = await videoElement.getProperty('href');
  const videoTitle = await videoElement.getProperty('textContent');
  
  console.log('视频标题：' + await videoTitle.jsonValue());
  console.log('视频链接：' + await videoUrl.jsonValue());
  
  await browser.close();
})();