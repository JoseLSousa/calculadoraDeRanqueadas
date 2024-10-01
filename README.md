# Sistema de Classificação de Heróis 🦸

Este projeto é um sistema simples que calcula o nível de um herói com base no número de vitórias e derrotas. O saldo de vitórias é determinado subtraindo o número de derrotas do número de vitórias, e o nível do herói é determinado com base em faixas específicas de vitórias.

## Como Funciona 

O código possui duas variáveis principais:

- `vitorias`: Representa o número de vitórias de um herói.
- `derrotas`: Representa o número de derrotas de um herói.

A função `teste()` realiza o cálculo do saldo de vitórias e define o nível do herói com base nas vitórias.

### Classificação por Vitórias 🏆

A classificação do herói é baseada nas seguintes faixas de vitórias:

- **Ferro**: 0 a 10 vitórias
- **Bronze**: 11 a 20 vitórias
- **Prata**: 21 a 50 vitórias
- **Ouro**: 51 a 80 vitórias
- **Diamante**: 81 a 90 vitórias
- **Lendário**: 91 a 100 vitórias
- **Imortal**: 101+ vitórias

### Exemplo

No exemplo abaixo, o herói possui 100 vitórias e 40 derrotas:

```javascript
console.log(teste(100, 40));
```

### Saída esperada:

```bash
O Herói tem de saldo de 60 está no nível de Lendário
```