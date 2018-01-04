const { describe, it, before } = intern.getInterface('bdd');
const { assert } = intern.getPlugin('chai');

describe('Website', () => {
  before(({remote}) => {
    if (typeof remote.maximizeWindow === 'function') remote.maximizeWindow();
    return remote.get('https://neoceanplanning.com');
  });

  it('navigation should work', ({ remote }) => {
    return remote
      .findByCssSelector('.neop-nav li:first-child a').click().end()
      .sleep(10000)
      .getPageTitle().then((title) => assert.strictEqual(
        title, 'Northeast Ocean Plan | Northeast Ocean Planning'
      ));
  });
});
