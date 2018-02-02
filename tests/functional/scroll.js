const { describe, it, before } = intern.getInterface('bdd');

const scrollPage = async (remote) => {
  // set asyncExecute timeout to 2 minutes to account for scrolling long pages
  await remote.setExecuteAsyncTimeout(120000)
  await remote.executeAsync(function(callback) {
    var height = document.body.scrollHeight;
    var duration = height / 200 * 1000; /* 200px per second */
    jQuery('html, body').animate({ scrollTop: height }, duration, callback);
  });
  await remote.sleep(2000);
};

describe('Home', () => {
  before(async ({ remote }) => {
    await remote.get('https://neoceanplanning.org');
    await remote.sleep(2000);
  });

  it('scrolling...', async ({ remote }) => {
    await scrollPage(remote);
  });
});

describe('Plan', () => {
  before(async ({ remote }) => {
    await remote.get('https://neoceanplanning.org/plan');
    await remote.sleep(2000);
  });

  it('scrolling...', async ({ remote }) => {
    await scrollPage(remote);
  });
});

describe('About', () => {
  before(async ({ remote }) => {
    await remote.get('https://neoceanplanning.org/about');
    await remote.sleep(2000);
  });

  it('scrolling...', async ({ remote }) => {
    await scrollPage(remote);
  });
});

describe('News Archives', () => {
  before(async ({ remote }) => {
    await remote.get('https://neoceanplanning.org/news');
    await remote.sleep(2000);
  });

  it('scrolling...', async ({ remote }) => {
    await scrollPage(remote);
  });
});

describe('News', () => {
  before(async ({ remote }) => {
    await remote.get('https://neoceanplanning.org/news/november-15-16-rpb-meeting-briefing-packet-available/');
    await remote.sleep(2000);
  });

  it('scrolling...', async ({ remote }) => {
    await scrollPage(remote);
  });
});

describe('Event', () => {
  before(async ({ remote }) => {
    await remote.get('https://neoceanplanning.org/event/nrpb-data-workshop/');
    await remote.sleep(2000);
  });

  it('scrolling...', async ({ remote }) => {
    await scrollPage(remote);
  });
});
