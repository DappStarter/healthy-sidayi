require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note soap clutch gesture slender equal genius'; 
let testAccounts = [
"0x4f6eaf8d2b9561844c4cf6e54c713dbaa4d6c6b3027eab1fbdce296a3780c9d2",
"0x761fe3148406e0f39caa449c00026df86f74143c999cf14c4e889d5be1945726",
"0xf9771d5df4041d4f8b6b3fe03e0bc7ce6deb466f3ec558ce6578826b4a205567",
"0x79e1818c12ebff7c367daaec32b1fdd3780bff27cfea3e387206ee134b4e3a8e",
"0x010251f40d52ed6b24515157baea453b4b7e99f50e546901e7b43c9f0b066ac8",
"0xccfcf13a9509f0bb341abf097fd3c0a9d8d85cdbceaecccab182a08f762a0fa0",
"0xf0e0230c585681684f746584e982624710322f791a82491166a4904ddece6fd5",
"0x35b085dfebf7710998bfd36040f3344ac46ff071177d79601fbcd5d6ba636d36",
"0x5781e2e29c6f12a51440f6da19a2482a56b1930bce3c8c98a202bbdfd8d853a9",
"0xe9c5ef9ad4551e10a959f2f798db6ce8370a60aa7846140df28717a4060a9b14"
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
            version: '^0.5.11'
        }
    }
};
