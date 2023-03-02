const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Create a Chrome driver
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless'); // Run in headless mode to avoid opening a browser window
const driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

// Navigate to Google.com
driver.get('https://www.google.com');

// Find the search box and enter "BrowserStack"
driver.findElement(By.name('q')).sendKeys('BrowserStack', Key.RETURN);

// Wait for the search results to appear and then close the browser
driver.wait(until.titleContains('BrowserStack'), 10000).then(() => {
  console.log('Search results for "BrowserStack" found!');
  driver.quit();
}).catch((error) => {
  console.error(error);
  driver.quit();
});
