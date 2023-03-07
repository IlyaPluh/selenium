function closebrowser (ms) {
    setTimeout(function() {driver.quit()}, ms)
}

const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

//Create a Chrome driver
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--disable-gpu'); // Disable hardware acceleration to make the window visible
const driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

// Navigate to 5scontrol
driver.get('https://5scontrol.com');

// Find chekbox problems
//const chekboxproblems = driver.findElement(By.className('uk-inline')).click();
const ulproblems = driver.findElement(By.id('type-list'))
//const liproblems = ulproblems.findElements(By.tagName('li'));
const liproblems = ulproblems.findElements(By.xpath('./*')); 

// const liTextArray = liproblems.map((el) => {
//     return el.getText();
//   });
console.log(liproblems)


// Find the "About Us" link and click it
// const aboutUsLink = driver.findElement(By.className('item-118')) //linkText('About us'));
// const firstChild = aboutUsLink.findElement(By.xpath('./*'));   
// firstChild.click();

closebrowser(5000);