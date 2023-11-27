import { createContext, useEffect, useState, useRef } from 'react';

export const ElectionContext = createContext("aadhan");

export const WebscoketContext = ({ children }) => {
    const [webSocketData, setWebSocketData] = useState(null);
    const [stateName, setStateName] = useState("Telangana")
    const ws = useRef(null)

    useEffect(() => {
        console.log("window", window.FocusEvent)
    }, [])

    //WEBSOCKET
    useEffect(() => {
        // const socket = new WebSocket('wss://stage-cmsapis.aadhan.in/election-results/ws');
        // const handleWebsocket = () => {
        //     socket.onopen = () => {
        //         console.log('WebSocket connection opened');
        //     };
        //     socket.onmessage = (event) => {
        //         const wsdata = event.data
        //         const wsData = JSON.parse(wsdata)
        //         setWebSocketData(wsData)
        //         console.log("websocket data: ", wsData, typeof (wsData))
        //     };
        //     socket.onerror = (error) => {
        //         console.error('WebSocket error:', error);
        //     };
        //     socket.onclose = (event) => {
        //         if (event.wasClean) {
        //             console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
        //         } else {
        //             console.error('WebSocket connection abruptly closed');
        //         }
        //     };
        // }
        // handleWebsocket();

        // return () => {
        //     if (socket && socket.readyState === WebSocket.OPEN) {
        //         socket.close();
        //     }
        // };
        const socket = new WebSocket('wss://stage-cmsapis.aadhan.in/election-results/ws');

        const initializeWebSocket = () => {
            socket.onopen = () => {
                console.log('WebSocket connection opened');
            };
            sendHeartbeat();
        }
        
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
                setTimeout(initializeWebSocket, 1000);
            }
        };

        const sendHeartbeat = () => {
            if (socket.readyState === WebSocket.OPEN) {
                socket.send(JSON.stringify({ type: 'pong' }));
            }
        };

        initializeWebSocket();

        const heartbeatInterval = setInterval(sendHeartbeat, 30000);

        return () => {
            if (socket && socket.readyState === WebSocket.OPEN) {
                socket.close();
            }
            clearInterval(heartbeatInterval)
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