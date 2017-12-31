const bitcoin = require("bitcoinjs-lib");
const bip39 = require('bip39');

const mnemonic = '';
const seed = bip39.mnemonicToSeed(mnemonic);
const node = bitcoin.HDNode.fromSeedBuffer(seed);

console.log(node.getAddress(), node.keyPair.toWIF());
