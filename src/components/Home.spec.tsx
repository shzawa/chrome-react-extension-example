import { render, screen } from '@testing-library/react';
import  utils from '../chrome/utils';
import { Home } from './Home'
Object.assign(global, require('jest-chrome'));

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

test('renders learn react link', async () => {
  const getChromeTabsSpy = jest.spyOn(utils, 'getChromeTabs').mockImplementation(() => Promise.resolve(tabs));

  render(<Home />);
  expect(getChromeTabsSpy).toBeCalled();

  const linkElement  = await screen.findByText('https://www.google.com')
  expect(linkElement).toBeTruthy()

});
