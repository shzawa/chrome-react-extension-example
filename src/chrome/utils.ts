export const getChromeTabs = async (): Promise<chrome.tabs.Tab[]> => {
    const queryInfo = { active: true, lastFocusedWindow: true };
    return chrome.tabs.query(queryInfo);
}

export const getCurrentTabUrl = async (callback: (url: string | undefined) => void): Promise<void> => {
    const [tab] = await getChromeTabs()
    callback(tab.url);
}

export const getCurrentTabUId = async (callback: (url: number | undefined) => void): Promise<void> => {
    const [tab] = await getChromeTabs()
    callback(tab.id);
}

export const setFunctionOnCurrentTab = async (callback: () => void): Promise<void> => {
    const [tab] = await getChromeTabs()
    tab.id && chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: callback
    })
}
