const functions = require('@google-cloud/functions-framework');
const puppeteer = require('puppeteer');

const PUPPETEER_OPTIONS = {
  headless: true,
};

functions.http('helloHttp', async (req, res) => {
  const browser = await puppeteer.launch(PUPPETEER_OPTIONS);
  const page = await browser.newPage();

  // your logic here

  res.send(`Hello ${req.query.name || req.body.name || 'World'}!`);
});

