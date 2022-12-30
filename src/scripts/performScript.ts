import {KEYS, MESSAGES} from "../globalConstants";
import changeBackgroundColor from "./changeBackgroundColor";

export default function performScript(keys: KEYS[] | KEYS, callback: MESSAGES): void{
    chrome.storage.sync.get(keys, async (data) => {
        switch (callback) {
            case MESSAGES.CHANGE_BG:
                const currentColor = data[KEYS.CURRENT_COLOR];
                const tabId = data[KEYS.TAB_ID];

                if (currentColor && tabId){
                    await changeBackgroundColor(currentColor, tabId);
                }
                break;
        }
    });
}