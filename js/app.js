function addTable() {
    var myTableDiv = document.getElementById("metric_results")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')

    table.border = '1'
    table.appendChild(tableBody);

    var heading = 3;
    var stock = new Array()
    var x = 0
    var y = 1
    var increment = 1
    for (let i = 0; i < heading; i++) {
        stock[i] = new Array("", "", "")

    }
    stock[x][y] = increment

    recorrer(x, y, increment, stock);

    //COLUMNAS DE LA TABLA
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    //FILAS DE LA TABLA
    for (i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');

        for (j = 0; j < stock[i].length; j++) {
            var td = document.createElement('TD')
            td.style.height = "35px";
            td.style.width = "35px";
            td.appendChild(document.createTextNode(stock[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table)
}

function recorrer(x, y, increment, stock) {
    if (y != 1) {
        if (x == 2) {
            increment += 1
            if (y == 0) {
                y += 1
            } else {
                y = 0
                x = x - 1
            }
            stock[x][y] = increment

        } else {
            increment++
            y += 1
            if (y <= 2) {
                stock[x][y] = increment
            } else {
                y = 0
                x = 2
                if (stock[x][y] == '') {
                    stock[x][y] = increment
                } else {
                    x = 0
                    stock[x][y] = increment

                }


            }
        }
    } else {
        if (x - 1 >= 0) {
            y += 1
            x = x - 1
            increment += 1
            stock[x][y] = increment

        } else {
            increment += 1
            x = 2
            y = y + 1

            if (stock[x][y] == "") {
                stock[x][y] = increment
            } else {
                y = y - 1
                stock[x][y] = increment
            }
        }
    }

    if (increment != 9) {
        recorrer(x, y, increment, stock);
    }


}