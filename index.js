const assert = require('assert');
const webdriver = require('selenium-webdriver');
const config = require('dotenv').config();

const browser = {
  'os': 'OS X',
  'os_version': 'High Sierra',
  'browserName': 'Safari',
  'browser_version': '11.0'
}

const driver = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities({
    ...browser,
    'project': 'NEOP',
    'resolution': '1920x1080',
    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
    'browserstack.debug': 'true',
  })
  .build();

// maximize browser window and navigate to site
driver.manage().window().maximize();
driver.get('http://www.neoceanplanning.com');
// click 'Plan' navigation link and check resulting page title
driver.findElement(webdriver.By.css('.neop-nav li:first-child a')).click();
driver.sleep(5000);
driver.getTitle().then((title) => assert.equal(
  title, 'Northeast Ocean Plan | Northeast Ocean Planning'
));

driver.quit();
