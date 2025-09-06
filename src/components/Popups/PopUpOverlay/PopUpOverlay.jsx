import React from 'react';
import { createPortal } from 'react-dom';
const PopUpOverlay = ({children}) => {
    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">{children}</div>,
        document.body
    )
}

export default PopUpOverlay;
