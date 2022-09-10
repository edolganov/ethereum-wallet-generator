const ethWallet = require('ethereumjs-wallet');

for(let index=0; index < 20; index++) {
    let addressData = ethWallet['default'].generate();
    console.log('#', index+1);
    console.log(`Private key = ${addressData.getPrivateKeyString()}`);
    console.log(`Address = ${addressData.getAddressString()}`);
    console.log('');

}
