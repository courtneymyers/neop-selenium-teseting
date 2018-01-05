const { describe, it, before } = intern.getInterface('bdd');

describe('Homepage', () => {
  before(async ({remote}) => {
    await remote.get('https://neoceanplanning.com');
    await remote.sleep(2000);
  });

  it('scrolling for BrowserStack video', async ({ remote }) => {
    await remote.setExecuteAsyncTimeout(10000);
    await remote.executeAsync((callback) => {
      const height = document.body.scrollHeight;
      const duration = height / 200 * 1000; // 200px per second
      // executeAsync() expects a promise as the returned value
      return new Promise(async () => {
        await jQuery('html, body').animate({ scrollTop: height }, duration);
        await callback();
      });
    });
    await remote.sleep(10000);
  });
});
