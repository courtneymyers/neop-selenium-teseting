# “BrowserStack Automate” Testing of NEOP website

Automated functional tests for the NEOP website using BrowserStack. This projects requires a `.env` file in the root of the project containing BrowserStack authorization credentials. The environment variables should be named: `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY`.

## npm scripts
- The npm `start` script uses `selenium-webdriver.js` to run a simple test using Safari 11 on Mac OS High Sierra. View `./index.js` to view contents of the simple functional test.

- The following npm scripts use `intern.js` to run all tests in the `tests/functional/` directory. Browser configuration is set up in `./intern.json`:
  - `mac` script runs tests on macOS High Sierra for the latest versions of Safari, Opera, Chrome, and Firefox.
  - `win` script runs tests on Windows 10 for the latest versions of Internet Explorer, Edge, Chrome, and Firefox.
  - `current` script runs tests included in both `mac` and `win` scripts (latest versions of all major browsers for both macOS and Windows)
  - `safari` script runs tests for old versions of Safari on legacy versions of macOS/OSX
  - `ie` script runts tests for old versions of Internet Explorer on legacy versions of Windows
