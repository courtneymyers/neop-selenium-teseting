const { describe, it, before } = intern.getInterface('bdd');

describe('Homepage', () => {
  before(async ({remote}) => {
    await remote.get('https://neoceanplanning.com');
    await remote.sleep(2000);
  });

  it('scrolling for BrowserStack video', async ({ remote }) => {
    // set asyncExecute timeout to 2 minutes to account for scrolling long pages
    await remote.setExecuteAsyncTimeout(120000)
    await remote.executeAsync(function(callback) {
      var height = document.body.scrollHeight;
      var duration = height / 200 * 1000; /* 200px per second */
      jQuery('html, body').animate({ scrollTop: height }, duration, callback);
    });
    await remote.sleep(2000);
  });
});
