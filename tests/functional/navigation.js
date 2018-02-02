const { describe, it, before } = intern.getInterface('bdd');
const { assert } = intern.getPlugin('chai');

describe('Website', () => {
  before(async ({ remote }) => {
    await remote.get('https://neoceanplanning.org');
    await remote.sleep(2000);
  });

  it('navigation should work', async ({ remote }) => {
    await remote.findByCssSelector('.neop-nav li:first-child a').click().end();
    await remote.sleep(5000);
    const title = await remote.getPageTitle();
    assert.strictEqual(title, 'Northeast Ocean Plan | Northeast Ocean Planning');
  });
});
