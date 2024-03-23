const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext('2d');
//  Essa função é executada quando o usuario clica no botão verificar, ela vai atribuir o valor digitado a variavel qtdTotal.
//  Após isso ela atribui a variavel lista o valor retornado da função que gera uma lista de numeros primos com a quantidade igual ao valor digitado pelo usuario.
//  E então eu uso uma das funções que vai exibir a lista retornada da função quera listas.
//  ( document.getElementById("Numero1").value ) usar isso para receber o valor digitado em alguma variavel
function exec() {
    let qtdTotal = parseInt(document.getElementById("Numero1").value, 10);  // oque for digitado sera depositado na variavel qtdTotal
    let lista = listarPrimos(qtdTotal);
    exibirPrimos3(lista);   // aqui é possivel alterar a maneira como é visualizado os numeros primos mudando de exibirPrimos3 para, exbirPrimos ou exibirPrimos2.
}

//  Essa função como dito anteriormente é usada para criar um array que ira adicionar uma quantidade de numeros primos igual ao valor digitado pelo usuario.
//  E retornara esse array.
function listarPrimos(qtdTotal) {
    let qtd = 1;
    let lista = [2];
    for (c = 3; qtd < qtdTotal; c += 2) {
        if (eprimo(c)) {
            // lista[qtd] = c;
            lista.push(c);
            qtd++;
        }
    }
    return lista;
}

// Aqui foi feita a primeira maneira de exibir esse numeros primos. Aqui eu apenas exibo os numeros primos aumentando o valor de y como uma quebra de linha.
function exibirPrimos(lista) {
    ctx.clearRect(0, 0, 1000, 5000); // limpa tela quando a funçao é chamada
    let x = 0;                 // posição x em que sera escrito
    ctx.font = "100px Arial";

    for (let item = 0, y = 0; item < lista.length; item++, y += 100) {
        let primo = lista[item]
        ctx.fillText(primo, x, y);
        console.log(primo);
    }
}

// Desta maneira eu exibo os numeros primos todos em uma linha do tamanho do meu canvas.
function exibirPrimos2(lista) {
    let text = lista.join(", "); // usando o metodo .join() ele funciona como toString() ou seja transforma em um texto, mas alem disso eu especifico um separador.
    ctx.clearRect(0, 0, 1000, 5000); // limpa tela quando a funçao é chamada
    ctx.font = "100px Arial";
    ctx.fillText(text, 0, 100, 1000);
    console.log(text);
}

// Dessa maneira eu exibo a lista da mesma maneira que a função exibirPrimos2, porem quando chega no limite do canvas ele soma 100 no eixo y, e assim gera uma quebra de linha
function exibirPrimos3(lista) {
    ctx.clearRect(0, 0, 1000, 5000); // limpa tela quando a funçao é chamada
    let x = 0;                 // posição x em que sera escrito
    let N1 = parseInt(document.getElementById("Numero1").value, 10);  // oque for digitado sera depositado na variavel recebe  
    let y = 100;
    ctx.font = "100px Arial";

    for (let item = 0; item < lista.length; item++) {
        let primo = lista[item].toString().concat(", "); // Esta linha de codigo transforma a minha lista(array) em texto e logo após eu concateno com outro array em que existe um separador.
        let tamanho = ctx.measureText(primo).width; //mede o texto e usa somente o width
        if (x + tamanho > 1000) {
            y += 100;
            x = 0;
        }

        ctx.fillText(primo, x, y);
        x += tamanho;
        console.log(primo);
    }
}

// Essa função verifica um numero qualquer e retorna true caso seja um primo e false caso não seja.
function eprimo(N1) {
    let contador = 3;
    if (N1 < 2 || (N1 % 2 == 0 && N1 != 2)) {
        return false;
    } else {
        while (contador <= Math.sqrt(N1)) {
            if (N1 % contador == 0) {
                return false;
            }
            contador = contador + 2;
        }
    }
    return true;
}