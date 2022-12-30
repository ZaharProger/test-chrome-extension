import React, {ReactNode, useEffect} from "react";

import {COLORS, MESSAGES, KEYS} from "../globalConstants";

export default function PopupBlocks(){
    const generateBlocks = (): ReactNode[] => {
        const blocks: ReactNode[] = [];

        for (let i = 0; i < 12; ++i){
            blocks.push(
                <button type="button" className="block d-flex m-1" style={ {
                    width: '40px',
                    height: '40px',
                    backgroundColor: COLORS[i],
                    border: '2px solid black',
                    borderRadius: '10px'
                } }></button> );
        }

        return blocks;
    }

    useEffect(() => {
        Array.from(document.querySelectorAll('.block')).forEach((block: HTMLElement) => {
           block.onclick = () => chrome.tabs.query({ active: true }, async (tabs) => {
               if (!tabs[0].url?.startsWith("chrome://")){
                   await chrome.storage.sync.set({
                       [KEYS.CURRENT_COLOR]: block.style.backgroundColor,
                       [KEYS.TAB_ID]: tabs[0].id
                   });

                   await chrome.runtime.sendMessage({
                       from: MESSAGES.CHANGE_BG
                   });
               }
           });

        });
    }, []);

    return(
        <div id="Popup-blocks" className="d-flex flex-row flex-wrap">
            {
                generateBlocks()
            }
        </div>
    )
}