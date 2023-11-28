import { createContext, useEffect, useState } from 'react';
import RobustWebSocket from 'robust-websocket';

export const ElectionContext = createContext("aadhan");

export const WebscoketContext = ({ children }) => {
    const [webSocketData, setWebSocketData] = useState(null);
    const [stateName, setStateName] = useState("Telangana")
    const [isTx, setIsTx] = useState(true)

    useEffect(() => {
        console.log("window", window.FocusEvent)
    }, [])

    //WEBSOCKET
    useEffect(() => {
        //1

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

        //2
        // const socket = new WebSocket('wss://stage-cmsapis.aadhan.in/election-results/ws');

        const initializeWebSocket = () => {
            const socket = new WebSocket('wss://stage-cmsapis.aadhan.in/election-results/ws');
            console.log("intilization func runned")
            socket.onopen = () => {
                console.log('WebSocket connection opened');
            };
            // sendHeartbeat();

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
                    setTimeout(() => initializeWebSocket, 1000);
                }
            };
            socket.onerror = (error) => {
                console.error('WebSocket error:', error);
            };
        }
        document.addEventListener('visibilitychange', ()=>{
            if(document.visibilityState === "visible"){
                initializeWebSocket();
            }
        });
        // const sendHeartbeat = () => {
        //     if (socket.readyState === WebSocket.OPEN) {
        //         socket.send(JSON.stringify({ type: 'pong' }));
        //     }
        // };

        initializeWebSocket();

        // const heartbeatInterval = setInterval(() => sendHeartbeat, 30000);

        // return () => {
        //     if (socket && socket.readyState === WebSocket.OPEN) {
        //         socket.close();
        //     }
        //     clearInterval(heartbeatInterval)
        // };

        //3

        // var ws = new RobustWebSocket('wss://stage-cmsapis.aadhan.in/election-results/ws', null, {
        //     shouldReconnect: function (event, ws) {
        //         if (event.code === 1008 || event.code === 1011 || event.code === 1000) return
        //         return [0, 3000, 10000][ws.attempts]
        //     },
        //     automaticOpen: true,
        //     ignoreConnectivityEvents: false
        // })

        // ws.addEventListener('open', function (event) {
        //     ws.send('robust websocket connected')
        //     console.log('client robust websocket connected')
        // })

        // ws.addEventListener('message', function (event) {
        //     const wsdata = event.data
        //     const wsData = JSON.parse(wsdata)
        //     setWebSocketData(wsData)
        //     console.log("websocket data: ", wsData, typeof (wsData))
        // })
        // ws.addEventListener('close', () => {
        //     console.error('WebSocket connection abruptly closed');
        // })
        // ws.addEventListener('close', () => {
        //     console.error('WebSocket connection abruptly closed');
        // })
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