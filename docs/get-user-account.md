# Get User Account

```javascript
import '@skilm/web-embedded-wallet-provider';
import Web3 from 'web3';
const { ethereum, hasKeyShare } = await window.initializeDekeyProvider();
const web3 = new Web3(ethereum);

const accounts = await web3.eth.requestAccounts();
console.log(accounts); // ['0x...']
```

# Event

```javascript
import '@skilm/web-embedded-wallet-provider';
const { ethereum, hasKeyShare } = await window.initializeDekeyProvider();

ethereum.on('accountsChanged', (accounts) => {
  console.log(accounts); // ['0x...']
  // if wallet is locked, accounts is empty array []
});
```
