const puppeteer = require('puppeteer');

let browserPromise = puppeteer.launch({
  args:[
    '--no-sandbox',
  ]
});
  exports.sendRequest = async(req, res)=>{
    const url = req.query.url || 'https://www.google.com/';
    
    const browser = await browserPromise;
    // const context = await browser.createIncognitoBrowserContext();
    const page = await browser.newPage();
    await page.goto(url);
    const image = await page.screenshot();
    res.setHeader('Content-Type','image/png');
    res.send(image);
    browser.close();
}