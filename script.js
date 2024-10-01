let vitorias = 0;
let derrotas = 0;

function teste(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";
    if (vitorias > 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias > 20 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias > 50 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias > 80 && vitorias <= 90) {
        nivel = "Diamante"
    } else if (vitorias > 90 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Ferro";
    }
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

console.log(teste(100, 40));