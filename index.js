let vitorias ;
let derrotas ;
let saldoDeVitorias = saldo ( 200, 130);
let nivel = nivelJogador (saldoDeVitorias);



function saldo (vitorias, derrotas){
    return  vitorias - derrotas;
    
}

console.log(saldoDeVitorias);
console.log(nivel);


function nivelJogador( saldoDeVitorias){
     if ( saldoDeVitorias <= 10){
            return "Ferro";
     }
    if (saldoDeVitorias >=11 && saldoDeVitorias <=20){
            return "Bronze";
    }
    if (saldoDeVitorias >=21 && saldoDeVitorias <=50){
        return "Prata";
    }
    if (saldoDeVitorias >=51 && saldoDeVitorias <=80){
        return "Ouro";
    }
    if (saldoDeVitorias >= 81 && saldoDeVitorias <=90){
        return "Diamante";
    }
    if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100){
        return "Lendário";
    }
    if (saldoDeVitorias >101){
        return "Imortal";
    }
 }
 console.log ("O herói tem um saldo de " + saldoDeVitorias + " e está no nivel " + nivel);




