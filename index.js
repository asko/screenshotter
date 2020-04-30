const puppeteer = require('puppeteer');

async function main(){
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setBypassCSP(true);
    await page.goto('https://google.com/', {waituntil: 'networkidle0'});
    await page.screenshot({path:'./screen.png', fullPage: true});
    console.log('done');
    process.exit();
}

main();