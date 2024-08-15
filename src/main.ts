import * as bip39 from "bip39";
import * as bitcoin from "bitcoinjs-lib";
import ECPairFactory from "ecpair";
import * as ecc from "tiny-secp256k1";

const ECPair = ECPairFactory(ecc);

// Usar a rede testnet para testes
const TESTNET = bitcoin.networks.testnet;

// Gerar uma frase mnemônica (seed)
const mnemonic = bip39.generateMnemonic();

// Gerar a seed a partir da frase mnemônica
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criar um keypair a partir da seed
const keyPair = ECPair.fromPrivateKey(seed.slice(0, 32), { network: TESTNET });

// Gerar o endereço Bitcoin
const { address } = bitcoin.payments.p2pkh({
  pubkey: keyPair.publicKey,
  network: TESTNET,
});

// Exibir a chave privada no formato WIF
const wif = keyPair.toWIF();

console.log("Frase mnemônica:", mnemonic);
console.log("Endereço Bitcoin (Testnet):", address);
console.log("Chave privada (WIF - Testnet):", wif);
