// 参考: https://medium.com/welldone-software/jest-how-to-mock-a-function-call-inside-a-module-21c05c57a39f

const utils = {
    getChromeTabs: async (): Promise<chrome.tabs.Tab[]> => {
        const queryInfo = { active: true, lastFocusedWindow: true };
        return chrome.tabs.query(queryInfo);
    },
    getCurrentTabUrl: async (callback: (url: string | undefined) => void): Promise<void> => {
        const [tab] = await utils.getChromeTabs();
        callback(tab.url);
    },
    getCurrentTabUId: async (callback: (url: number | undefined) => void): Promise<void> => {
        const [tab] = await utils.getChromeTabs();
        callback(tab.id);
    },
    setFunctionOnCurrentTab: async (callback: () => void): Promise<void> => {
        const [tab] = await utils.getChromeTabs();
        await chrome.scripting.executeScript({
            target: { tabId: tab.id! },
            func: callback
        });
    },
}

export default utils
