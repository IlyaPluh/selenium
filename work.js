const {Builder, By, Key, until} = require('selenium-webdriver');
const safari = require('selenium-webdriver/safari');

// Create a Safari driver
const driver = new Builder().forBrowser('safari').setSafariOptions(new safari.Options()).build();

// Navigate to 
driver.get('http://192.168.1.101:3000').then(function() {
  setTimeout(function() {}, 5000);
});


// Find the 
driver.findElement(By.xpath("//input[@placeholder='Enter Email']"))