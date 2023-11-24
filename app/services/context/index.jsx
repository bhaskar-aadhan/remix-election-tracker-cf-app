import { createContext, useEffect, useState } from 'react';

export const ElectionContext = createContext("aadhan");

export const WebscoketContext = ({ children }) => {
    const [webSocketData, setWebSocketData] = useState(null);
    const [ stateName, setSateName ] = useState("Teleagana")

    //WEBSOCKET
    useEffect(() => {
        const socket = new WebSocket('wss://stage-cmsapis.aadhan.in/election-results/ws');
        socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        socket.onmessage = (event) => {
            const wsdata = event.data
            const wsData = JSON.parse(wsdata)
            setWebSocketData(wsData)
            console.log("websocket data: ", wsData, typeof (wsData))
        };
        socket.onclose = (event) => {
            if (event.wasClean) {
                console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
            } else {
                console.error('WebSocket connection abruptly closed');
            }
        };
        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
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
        <ElectionContext.Provider value={[webSocketData, stateName, setSateName]}>
            {children}
        </ElectionContext.Provider>
    )
}