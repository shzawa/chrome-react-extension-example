import { useEffect, useState } from "react";
import { ChromeMessage, Sender } from "../types";
import { getCurrentTabUId, getCurrentTabUrl, setFunctionOnCurrentTab } from "../chrome/utils";

export const Home = () => {
    const [url, setUrl] = useState<string>('');
    const [responseFromContent, setResponseFromContent] = useState<string>('');
    const [bgColor, setBgColor] = useState<string>('');

    /**
     * Get current URL
     */
    useEffect(() => {
        getCurrentTabUrl((url) => {
            setUrl(url || 'undefined');
        })
    }, []);

    const sendTestMessage = () => {
        const message: ChromeMessage = {
            from: Sender.React,
            message: "Hello from React",
        }

        // 外に出す
        getCurrentTabUId((id) => {
            id && chrome.tabs.sendMessage(
                id,
                message,
                (responseFromContentScript) => {
                    setResponseFromContent(responseFromContentScript);
                });
        });
    };

    const sendRemoveMessage = () => {
        const message: ChromeMessage = {
            from: Sender.React,
            message: "delete logo",
        }

        getCurrentTabUId((id) => {
            id && chrome.tabs.sendMessage(
                id,
                message,
                (response) => {
                    setResponseFromContent(response);
                });
        });
    };

    const changeBackgroundColor = () => {
        setFunctionOnCurrentTab(() => { document.body.style.backgroundColor = 'black'; });
    }


    return (
        <div className="App">
            <header className="App-header">
                <p>Home</p>
                <p>URL:</p>
                <p>
                    {url}
                </p>
                <button onClick={sendTestMessage}>SEND MESSAGE</button>
                <button onClick={sendRemoveMessage}>Remove logo</button>
                <button onClick={changeBackgroundColor}>Change BackgroundColor To Black</button>
                <p>Response from content:</p>
                <p>
                    {responseFromContent}
                </p>
            </header>
        </div>
    )
}
