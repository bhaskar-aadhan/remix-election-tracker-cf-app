import { createContext, useEffect, useState } from 'react';

export const ElectionContext = createContext("aadhan");

export const WebscoketContext = ({ children }) => {
    const [webSocketData, setWebSocketData] = useState(null);
    const [stateName, setStateName] = useState("Telangana")

    useEffect(() => {
        console.log("window", window.FocusEvent)
    }, [])

    //WEBSOCKET
    useEffect(() => {
        const socket = new WebSocket('wss://stage-cmsapis.aadhan.in/election-results/ws');
        const handleWebsocket = () => {
            socket.onopen = () => {
                console.log('WebSocket connection opened');
            };
            socket.onmessage = (event) => {
                const wsdata = event.data
                const wsData = JSON.parse(wsdata)
                setWebSocketData(wsData)
                console.log("websocket data: ", wsData, typeof (wsData))
            };
            socket.onerror = (error) => {
                console.error('WebSocket error:', error);
            };
            socket.onclose = (event) => {
                if (event.wasClean) {
                    console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
                } else {
                    console.error('WebSocket connection abruptly closed');
                }
                handleWebsocket();
            };
        }
        handleWebsocket();

        return () => {
            if (socket && socket.readyState === WebSocket.OPEN) {
                socket.close();
            }
        };
    }, [])

    if (webSocketData === null) {
        return <div>Loading .................</div>
    }
    return (
        <ElectionContext.Provider value={[webSocketData, stateName, setStateName]}>
            {children}
        </ElectionContext.Provider>
    )
}