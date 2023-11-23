import { createContext, useEffect, useState } from 'react';
import { addMagicFigureData } from '../ElectionServices';

export const ElectionContext = createContext("aadhan");

export const WebscoketContext = ({ children }) => {
    const [webSocketData, setWebSocketData] = useState(null);
    const [data, setData] = useState(null)

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

    useEffect(()=>{
            const data = addMagicFigureData(webSocketData?.[0]?.['states'])
            setData(data)
    }, [webSocketData])

    console.log("magic figure data", data)

    if (webSocketData === null || data === null) {
        return <div>Loading .................</div>
    }
    return (
        <ElectionContext.Provider value={data}>
            {children}
        </ElectionContext.Provider>
    )
}