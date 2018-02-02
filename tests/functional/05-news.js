const { describe, it, before } = intern.getInterface('bdd');
const scrollPage = require('./includes/scrollPage.js');

describe('News', () => {
  before(async ({ remote }) => {
    await remote.get('https://neoceanplanning.org/news/november-15-16-rpb-meeting-briefing-packet-available/');
    await remote.sleep(2000);
  });

  it('scrolling...', async ({ remote }) => {
    await scrollPage(remote);
  });
});
