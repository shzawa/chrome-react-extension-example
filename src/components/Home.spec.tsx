import { render, screen } from '@testing-library/react';
import * as utils from '../chrome/utils';
import { Home } from './Home'
import { chrome } from 'jest-chrome'

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

test.skip('renders learn react link', () => {
  (chrome.tabs.query as jest.Mock).mockImplementation(() => Promise.resolve(tabs))

  // const mockGetChromeTabs = jest.spyOn(utils, 'getChromeTabs');
  // mockGetChromeTabs.mockReturnValue()

  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
