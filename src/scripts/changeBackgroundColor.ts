async function changeBackgroundColor(color: string, id: number): Promise<void>{
    await chrome.scripting.executeScript({
        target: { tabId: id },
        func: (newColor) => document.body.style.backgroundColor = newColor,
        args: [color]
    });
}

export default changeBackgroundColor;