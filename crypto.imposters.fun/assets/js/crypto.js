const app = document.getElementById("crypto")
const generateTableRow = item => {

    let rowContent = '';

    rowContent = '<tr>';

    rowContent += '<td>' + item.symbol + '</td>';
    rowContent += '<td>' + item.ask + '</td>';
    rowContent += '<td>' + item.bid + '</td>';
    rowContent += '<td>' + item.last + '</td>';
    rowContent += '<td>' + item.volume + '</td>';

    rowContent += '</tr>';

    return rowContent;
}

const generateTableContent = cryptoData => {

    let tableContent = '';

    const itemHead = {
        symbol: 'Тикер',
        ask: 'Цена покупки',
        bid: 'Цена продажи',
        last: 'Последняя цена',
        volume: 'Объем'
    };

    tableContent += generateTableRow(itemHead);

    cryptoData.forEach(item => {
        tableContent += generateTableRow(item);
    });

    return tableContent;
}

function init(){
    app.innerHTML = generateTableContent(window.cryptoData)
    setTimeout(init,500)
}
setTimeout(init,500)