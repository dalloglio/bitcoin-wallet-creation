# Criação de Carteira Bitcoin

Este projeto é um exemplo básico de como criar uma carteira Bitcoin usando TypeScript e alguns pacotes populares como: `bitcoinjs-lib`, `ecpair`, e `bip39`.

## Funcionalidades

- Geração de uma frase mnemônica (seed) usando `bip39`.
- Criação de um par de chaves (chave privada e chave pública) usando `ecpair`.
- Geração de um endereço Bitcoin compatível com a rede `testnet` usando `bitcoinjs-lib`.

## Pacotes Utilizados

- **bitcoinjs-lib**: Biblioteca principal para manipulação de chaves, endereços e transações Bitcoin.
- **ecpair**: Pacote para criar e manipular pares de chaves (chave pública e privada).
- **bip39**: Implementação para gerar e manipular frases mnemônicas (seeds) para carteiras de criptomoedas.

## Como Executar o Projeto

### 1. Pré-requisitos

- Node.js (>=14.x)
- npm (vem com o Node.js)

### 2. Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/dalloglio/bitcoin-wallet-creation.git
cd bitcoin-wallet-creation
npm install
```

### 3. Compilação

Compile o código TypeScript para JavaScript:

```bash
npx tsc
```

### 4. Execução

Execute o código compilado para gerar uma nova carteira Bitcoin na rede testnet:

```bash
node dist/main.js
```

## Saída Esperada

O script irá gerar e exibir no terminal:

Frase mnemônica: Uma sequência de 12 palavras que pode ser usada para recriar a carteira.
Endereço Bitcoin (Testnet): O endereço público para receber bitcoins na rede de teste.
Chave privada (WIF - Testnet): A chave privada, formatada em WIF, que dá acesso completo aos fundos do endereço gerado.

```bash
Frase mnemônica: zebra reform cross exhibit region pluck random pill eight garbage shine radio
Endereço Bitcoin (Testnet): n3wdNHmixK1gNu5PfjmkyqqRFpaXTFsZAp
Chave privada (WIF - Testnet): cNryvnaWYA5krfCBFvCU5NyPVvfSYRBg54wSZmiwSjZwfVsKeDWr
```

## Nota

Este projeto utiliza a rede testnet do Bitcoin, que é uma rede de testes onde você pode experimentar transações sem gastar bitcoins reais. Não utilize a chave privada gerada neste projeto em produção.
