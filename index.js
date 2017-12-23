const config = require('dotenv').config();
const webdriver = require('selenium-webdriver');

// browser specs
const capabilities = {
  'project': 'NEOP',
  'browserName': 'Safari',
  'browser_version': '11.0',
  'os': 'OS X',
  'os_version': 'High Sierra',
  'resolution': '1920x1080',
  'browserstack.user': process.env.BROWSERSTACK_USER,
  'browserstack.key': process.env.BROWSERSTACK_KEY,
  'browserstack.debug': 'true'
};

const driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

// maximize browser window
driver.manage().window().maximize();
// navigate to site
driver.get('http://www.neoceanplanning.com');
// click 'Plan' navigation link
driver.findElement(webdriver.By.css('.neop-nav li:first-child a')).click();
// log page title
driver.getTitle().then(function(title) {
  console.log(title);
});

driver.quit();
