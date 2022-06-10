import utils from '../chrome/utils';
type ChromeTabTypes = chrome.tabs.Tab;
Object.assign(global, require('jest-chrome'));

const tabs: ChromeTabTypes[] = [
  {
    url: 'https://www.google.com',
    id: 0,
    index: 0,
    pinned: false,
    highlighted: false,
    windowId: 0,
    active: false,
    incognito: false,
    selected: true,
    discarded: false,
    autoDiscardable: false,
    groupId: 0,
  }
];

test('getCurrentTabUrl', async () => {
  jest.spyOn(utils, 'getChromeTabs').mockImplementation(() => Promise.resolve(tabs));

  await utils.getCurrentTabUrl((url) => {
    expect(url).toBe('https://www.google.com');
  });
});

test('mock', async () => {
  jest.spyOn(utils, 'getChromeTabs').mockImplementation(() => Promise.resolve(tabs));

  const actual = await utils.getChromeTabs();
  expect(actual).toMatchObject([{ id: 0, url: 'https://www.google.com' }]);
});
