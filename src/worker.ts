import {KEYS, MESSAGES} from "./globalConstants";
import performScript from "./scripts/performScript";

chrome.runtime.onMessage.addListener((message) => {
    let keys: KEYS[] | KEYS = null;
    let callback: MESSAGES = null;

    switch (message.from){
        case MESSAGES.CHANGE_BG:
            keys = [KEYS.CURRENT_COLOR, KEYS.TAB_ID];
            callback = MESSAGES.CHANGE_BG;
            break;
    }

    if (keys && callback){
        performScript(keys, callback);
    }
})

chrome.tabs.onUpdated.addListener(async (tabId,changeInfo, tab) => {
    if (changeInfo.status === 'complete' && !tab.url?.startsWith("chrome://")) {
        await chrome.storage.sync.set({
            [KEYS.TAB_ID]: tabId
        });

        performScript([KEYS.CURRENT_COLOR, KEYS.TAB_ID], MESSAGES.CHANGE_BG);
    }
});