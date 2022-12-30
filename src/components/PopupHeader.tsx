import React, {useEffect, useState} from "react";

import {LANGUAGES} from "../globalConstants";

export default function PopupHeader(){
    const [headerLanguage, changeHeaderLanguage] = useState<object>(LANGUAGES.ENG);

    useEffect(() => {
        document.getElementById('Popup-header').querySelector('button').onclick = () => {
            const isEng = headerLanguage === LANGUAGES.ENG;
            changeHeaderLanguage(isEng? LANGUAGES.RUS : LANGUAGES.ENG);
        }
    }, [headerLanguage]);

    return(
        <div id="Popup-header" className="d-flex flex-row mb-3">
            <span className="d-flex flex-grow-1 me-auto">{ headerLanguage.text }</span>
            <button type="button">{ headerLanguage.lang_code }</button>
        </div>
    )
}