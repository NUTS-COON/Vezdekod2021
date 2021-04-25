const crypto = ["BTCUSD", "ETHUSD", "BNBUSD"];
const socket = new WebSocket("wss://api.exchange.bitcoin.com/api/2/ws/public");
window.cryptoData = [];
socket.onopen = () => {
    crypto.forEach(function(item, i) {
        socket.send(JSON.stringify({
            "method": "subscribeTicker",
            "params": {
                "symbol": item
            },
            "id": i
        }))
    });
}

socket.onmessage = function(event) {
    const data = JSON.parse(event.data)
    console.log(event)
    if(data.method == "ticker"){
        window.cryptoData[crypto.indexOf(data.params.symbol)] = data.params
    }
}