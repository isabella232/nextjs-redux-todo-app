const csv = require('csv');
const { fstat } = require('fs');
const puppeteer = require('puppeteer');

const test = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const h1 = await page.$('h1');
  const titleText = await page.evaluate(element => element.textContent, h1);
  const titleBackground = await page.evaluate(element => getComputedStyle(element).getPropertyValue('background-color'), h1);

  // await page.screenshot({path: 'screen.png'});

  await browser.close();

  return {
    titleText,
    titleBackground,
  };
};

(async function main() {
  let iterations = Number(process.argv[2] || 100);
  const testPages = ['http://localhost:3000', 'http://localhost:3000?snippetKey=cjs_3881'];
  const results = [];
  console.log('url,titleText,titleBackground,duration,error');
  for (let i = 0; i < iterations; i++) {
    for (const testPage of testPages) {
      console.error(`Testing: ${testPage} (iteration: ${i})`);
      const start = Date.now();

      let result;
      try {
        result = await test(testPage);
      } catch(e) {
        result = {error: e.toString()}
      }

      const duration = Date.now() - start;
      console.error(`Result: ${JSON.stringify(result)}`);
      const {titleText, titleBackground, error} = result;
      console.log([testPage, `"${titleText}"`, `"${titleBackground}"`, duration, error].join(','));
    }
  }
}())