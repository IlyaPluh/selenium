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
const chekboxproblems = driver.findElement(By.className('uk-inline')).click();
const liproblems = driver.findElement(By.xpath("//\*[.='Lost inventory']")).click();
//const ulproblems = driver.findElement(By.id('type-list'))
//const liproblems = ulproblems.findElement(By.xpath('./*[3]')).click(); 

//const liproblem = driver.wait(driver.findElements(By.xpath('//ul[@id="type-list"]//li')), 3000)
const liproblem = driver.findElements(By.xpath('//ul[@id="type-list"]//li'))
  .then(function(elements) {
    setTimeout(function() {
    elements.forEach(function(element) {
      element.getText().then(function(text) {
        console.log('- ' + text);
      });
    });
}, 1000)
  })

// Find the "About Us" link and click it
// const aboutUsLink = driver.findElement(By.className('item-118')) //linkText('About us'));
// const firstChild = aboutUsLink.findElement(By.xpath('./*'));   
// firstChild.click();

closebrowser(6000);