const app = document.getElementById("crypto")
function init(){
    let res = '<tr><th>Тикер</th><th>Цена покупки</th><th>Цена продажи</th><th>Последняя цена</th><th>Объем</th></tr>'
    window.cryptoData.forEach(function(item) {
        res = res + '<tr>' + '<td>' + item.symbol + '</td><td>' + item.ask + '</td><td>' + item.bid + '</td><td>' + item.last + '</td><td>' + item.volume + '</td><td>' + '</td>' + '</tr>'
    });
    app.innerHTML = res
    setTimeout(init,500)
}
setTimeout(init,500)