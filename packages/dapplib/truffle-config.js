require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski stove cruise misery artwork imitate prison frame gate'; 
let testAccounts = [
"0x25761a73b2ba75e5553383b89108480c0dc2f73d71c381a13e90138bd3c85881",
"0xf0dcad07d2af0dbd2775c173e6ab4621c6a77704668a2a66ec8af6b226594c44",
"0x456857f2e0424d93016af21237a7a7bd73a3b468c7b4f2299a67181175b50779",
"0x058e0fd0640959a44b583622c4d5a81a06c990f32c8ff1ae26d90b79e9b7f17d",
"0x825174d8294ee74e3a22f179727ae085c0383255df118667f1a76268db30a500",
"0x76e7ee023675f25392f4bc829f7168bc17eae1fb7ff8132be9931c8b32e183b1",
"0x04cd1587a793206d06c405b974a6e7e554842403bfdf3e600b9baf363c593ca7",
"0x00ecb53926cf83f11c4f4f379493b4b07ae7bbe060008045e2e7049b41c75914",
"0x11ff0307d53d3ae6eb9b81efd1bc0837fcb2c115baf47fa82c3bc8ea741f1e7a",
"0x8fd0bf1e3eb0f880b363b505cb0468ce628bed36f43d88646c45dab2f6b5dbef"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

