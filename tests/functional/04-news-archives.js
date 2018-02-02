const { describe, it, before } = intern.getInterface('bdd');
const scrollPage = require('./includes/scrollPage.js');

describe('News Archives', () => {
  before(async ({ remote }) => {
    await remote.get('https://neoceanplanning.org/news');
    await remote.sleep(2000);
  });

  it('scrolling...', async ({ remote }) => {
    await scrollPage(remote);
  });
});
