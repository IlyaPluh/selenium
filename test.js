// const {Builder, By, Key, until} = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // Create a Chrome driver
// const chromeOptions = new chrome.Options();
// chromeOptions.addArguments('--headless'); // Run in headless mode to avoid opening a browser window
// const driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

// // Navigate to Google.com
// driver.get('https://www.google.com');

// // Wait for the page to load and fetch the title
// driver.wait(until.titleIs('Google'), 10000).then(() => {
//   driver.getTitle().then((title) => {
//     console.log(`The title of https://www.google.com is "${title}"`);
//     // Quit the driver
//     driver.quit();
//   });
// }).catch((error) => {
//   console.error(error);
//   // Quit the driver
//   driver.quit();
// });

// const {Builder, By, Key, until} = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // Create a Chrome driver
// const chromeOptions = new chrome.Options();
// chromeOptions.addArguments('--headless'); // Run in headless mode to avoid opening a browser window
// const driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

// // Navigate to Google.com
// driver.get('https://www.google.com');

// // Find the search box and enter "BrowserStack"
// driver.findElement(By.name('q')).sendKeys('BrowserStack', Key.RETURN);

// // Wait for the search results to appear and then close the browser
// driver.wait(until.titleContains('BrowserStack'), 10000).then(() => {
//   console.log('Search results for "BrowserStack" found!');
//   driver.quit();
// }).catch((error) => {
//   console.error(error);
//   driver.quit();
// });



// const {Builder, By} = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // Create a Chrome driver
// const driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build();

// // Navigate to Google.com
// driver.get('https://www.google.com');

// // Find the search box and enter "chatgpt"
// driver.findElement(By.name('q')).sendKeys('chatgpt');

// // Find the search button and click it
// driver.findElement(By.name('btnK')).click();

// // Wait for the search results to load
// driver.wait(() => {
//   return driver.getTitle().then(title => title.toLowerCase().includes('chatgpt'));
// }, 5000);

// // Close the browser
// driver.quit();


// const {Builder, By, Key, until} = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');

// // Create a Chrome driver
// const chromeOptions = new chrome.Options();
// chromeOptions.addArguments('--disable-gpu'); // Disable hardware acceleration to make the window visible
// const driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

// // Navigate to Google.com
// driver.get('https://www.google.com');

// // Find the search box and enter "chatgpt"
// driver.findElement(By.name('q')).sendKeys('chatgpt', Key.RETURN);
// //driver.findElement(By.css('input[name="q"]')).sendKeys('chatgpt', Key.RETURN);

// // Wait for the search results to appear and then close the browser
// driver.wait(until.titleContains('chatgpt'), 10000).then(() => {
//   console.log('Search results for "chatgpt" found!');
//   driver.quit();
// }).catch((error) => {
//   console.error(error);
//   driver.quit();
// });


const {Builder, By, Key, until} = require('selenium-webdriver');
const safari = require('selenium-webdriver/safari');

// Create a Safari driver
const driver = new Builder().forBrowser('safari').setSafariOptions(new safari.Options()).build();

// Navigate to Google.com
driver.get('https://www.google.com');

// Find the search box and enter "BrowserStack"
driver.findElement(By.name('q')).sendKeys('BrowserStack', Key.RETURN);

// Close the browser
driver.wait(until.titleContains('BrowserStack'), 10000).then(() => {
  console.log('Search results for "BrowserStack" found!');
  driver.quit();
}).catch((error) => {
  console.error(error);
  driver.quit();
});