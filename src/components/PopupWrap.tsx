import React from "react";

import PopupHeader from './PopupHeader';
import PopupBlocks from './PopupBlocks';
import '../styles/popup.css';

export default function PopupWrap(){
    return(
      <div id="Popup-wrap" className="d-flex flex-column p-2">
          <PopupHeader />
          <PopupBlocks />
      </div>
    )
}