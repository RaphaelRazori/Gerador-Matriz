var linesElement = document.querySelector("#lines");
var columnElement = document.querySelector('#column');
var piecesElement = document.querySelector('#pieces');
var btnElement = document.querySelector('button');


/* Inicializa a matriz com valores 1 */
function criaMatriz(lines, column) {
    var matriz = []

    for (var i = 0; i < lines; i++) {
        var vetor = []
        for (var j = 0; j < column; j++) {
            vetor.push(1)
        }
        matriz.push(vetor)
    }
    return matriz
}

/* Gera um número aleatório para escolher a peça na matriz */
function getRandom(pieces) {
    return Math.floor(Math.random() * (pieces - 1)) + 2
}

/* Busca o primeiro valor 1 da matriz e retorna o índice */
function busca(matriz1, y, column) {
    var matriz2 = matriz1
    var indice = 0
    var j = y

    for (var i = 0; i < column; i++) {
        if (matriz2[j][i] == 1) {
            indice = i
            break;
        } else {
            indice = 2000
        }
    }
    return indice;
}

//Função para inserir as peças na matriz
function criaPeças(pieces, column, lines, matriz) {
    var matriz1 = matriz
    var numb
    var x = 1000
    var a = 0
    while (a < x) {
        numb = getRandom(pieces)
        switch (numb) {
            case 2:
                //função de inserção de peça 2                                 
                for (var y = 0; y < lines; y++) {
                    var indice = busca(matriz1, y, column)
                    if (indice != 2000) {
                        if (matriz1[y][(indice + 1)] == 1) {
                            matriz1[y][indice] = 2
                            matriz1[y][(indice + 1)] = 2
                            indice=2000
                            break;
                        } else { }
                    }
                    else { break }
                }
                break;
            case 3:
                //função de inserção de peça 3
                for (var y = 0; y < lines; y++) {
                    var indice = busca(matriz1, y, column)
                    if (indice != 2000) {
                        if (matriz1[(y + 1)][indice] == 1) {
                            matriz1[y][indice] = 3
                            matriz1[(y + 1)][indice] = 3
                            indice=2000
                            break;
                        } else { }
                    }
                    else { break }
                }
                break;
            case 4:
                //função de inserção de peça 4
                for (var y = 0; y < lines; y++) {
                    var indice = busca(matriz1, y, column)
                    if (indice != 2000) {
                        if ((matriz1[(y + 1)][indice] == 1) && (matriz1[(y + 1)][(indice + 1)] == 1)) {
                            matriz1[y][indice] = 4
                            matriz1[(y + 1)][(indice + 1)] = 4
                            matriz1[(y + 1)][indice] = 4
                            matriz1[y][(indice + 1)] = 4
                            indice=2000
                            break;
                        } else { }
                    }
                    else { break }
                }
                break;
            case 5:
                //função de inserção de peça 5
                for (var y = 0; y < lines; y++) {
                    var indice = busca(matriz1, y, column)
                    if (indice != 2000) {
                        if ((matriz1[y][(indice + 1)] == 1) && (matriz1[y][(indice + 2)] == 1)) {
                            matriz1[y][indice] = 5
                            matriz1[y][(indice + 1)] = 5
                            matriz1[y][(indice + 2)] = 5
                            indice=2000
                            break;
                        } else { }
                    }
                    else { break }
                }
                break;
            case 6:
                //função de inserção de peça 6
                for (var y = 0; y < lines; y++) {
                    var indice = busca(matriz1, y, column)
                    if (indice != 2000) {
                        if ((matriz1[y][(indice + 1)] == 1) && (matriz1[y][(indice + 2)] == 1)) {
                            matriz1[y][indice] = 6
                            matriz1[y][(indice + 1)] = 6
                            matriz1[y][(indice + 2)] = 6
                            matriz1[(y + 1)][indice] = 6
                            matriz1[(y + 1)][(indice + 1)] = 6
                            matriz1[(y + 1)][(indice + 2)] = 6
                            indice=2000
                            break;
                        } else { }
                    }
                    else { break }
                }
                break;
            default:
                console.log(numb)
        }
        a++;
    }
    return matriz1;
}

/* Ao clicar no Botão Gera matriz na página */
btnElement.addEventListener("click", function () {
    var lines = linesElement.value
    var column = columnElement.value
    var pieces = piecesElement.value
    var matriz = criaMatriz(lines, column)
    var det = pieces > 1 ? 2 : 1
    switch (det) {
        case 2:
            matriz = criaPeças(pieces, lines, column, matriz)
            console.log(matriz)
            break;
        case 1:
            console.log(matriz)
            break;
        default:
            console.log("Deu default")
    }
})