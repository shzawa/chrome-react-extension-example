import { isCryptoKey } from 'util/types';
import * as utils from '../chrome/utils';
Object.assign(global, require('jest-chrome'))


type MutedInfo = {
  muted: boolean;
  reason?: string | undefined;
  extensionId?: string | undefined;
}

type Tab = {
  status?: string | undefined;
  index: number;
  openerTabId?: number | undefined;
  title?: string | undefined;
  url?: string | undefined;
  pendingUrl?: string | undefined;
  pinned: boolean;
  highlighted: boolean;
  windowId: number;
  active: boolean;
  favIconUrl?: string | undefined;
  id?: number | undefined;
  incognito: boolean;
  selected: boolean;
  audible?: boolean | undefined;
  discarded: boolean;
  autoDiscardable: boolean;
  mutedInfo?: MutedInfo | undefined;
  width?: number | undefined;
  height?: number | undefined;
  sessionId?: string | undefined;
  groupId: number;
}

const tabs: Tab[] = [
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
]

test.skip('getCurrentTabUrl', async () => {
  jest.spyOn(utils, 'getChromeTabs').mockResolvedValue(tabs)
  await utils.getCurrentTabUrl((url) => {
    expect(url).toBe('https://www.google.com')
  })


  // const mockGetChromeTabs = jest.spyOn(utils, 'getChromeTabs');
  // mockGetChromeTabs.mockReturnValue()
});

test('mock', async () => {
  jest.spyOn(utils, 'getChromeTabs').mockResolvedValue(tabs)
  const actual = await utils.getChromeTabs()
  expect(actual).toMatchObject([{ id: 0, url: 'https://www.google.com' }])
})
