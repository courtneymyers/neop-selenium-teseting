const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

registerSuite('home page', {
  'navigation'() {
    return this.remote
      .maximizeWindow()
      .get('http://www.neoceanplanning.com')
      .findByCssSelector('.neop-nav li:first-child a')
      .click()
      .end()
      .sleep(5000)
      .getPageTitle()
      .then((title) => assert.strictEqual(
        title, 'Northeast Ocean Plan | Northeast Ocean Planning')
      );
  }
});
