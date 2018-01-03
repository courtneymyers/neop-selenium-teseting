# “BrowserStack Automate” Testing of NEOP website

Automated functional tests for the NEOP website using BrowserStack. This projects requires a `.env` file in the root of the project containing BrowserStack authorization credentials. The environment variables should be named: `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY`.

## npm scripts
- The npm `start` script uses `selenium-webdriver.js` to run a simple test using Safari 11 on Mac OS High Sierra. View `./index.js` to view contents of the simple functional test.

- The npm `config` script shows all child configs set up in the `./intern.json` config file. The file is organized into child configs, each containing configuration for different browsers and/or devices. They can then be run via `intern config=@child-config-key}` (see below).

- The following npm scripts use `intern.js` to run all tests in the `tests/functional/` directory. Browser configuration is set up in `./intern.json`:
  - `mac` script runs tests on macOS High Sierra for the latest versions of Safari, Chrome, and Firefox.
  - `win` script runs tests on Windows 10 for the latest versions of IE, Edge, Chrome, and Firefox.
  - all other scripts run tests on the mobile device with the given script name (ex. _iPhone X_), using the default browser for that device.
