const config = require('dotenv').config();
const webdriver = require('selenium-webdriver');

const device = {
  'browserName': 'Safari',
  'browser_version': '11.0',
  'os': 'OS X',
  'os_version': 'High Sierra',
  'resolution': '1920x1080',
}

const driver = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities({
    ...device,
    'project': 'NEOP',
    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
    'browserstack.debug': 'true',
  })
  .build();

// maximize browser window and navigate to site
driver.manage().window().maximize();
driver.get('http://www.neoceanplanning.com');

// click 'Plan' navigation link
driver.findElement(webdriver.By.css('.neop-nav li:first-child a')).click();

// log page title
driver.getTitle().then((title) => console.log(title));

driver.quit();
