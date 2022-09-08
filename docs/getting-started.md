# Getting Started

## Hello World Walkthrough

### Step 1: Include Dekey SDK Script

```javascript
npm install --save @skilm/web-embedded-wallet-provider@latest
```

### Step 2: Setup Dekey Provider

```javascript
import '@skilm/web-embedded-wallet-provider';
import Web3 from 'web3';

const iframeSrc = 'http://52.78.108.22/index.html'; // static server serving dekey sdk
const { ethereum, hasKeyShare } = await window.initializeDekeyProvider(
  iframeSrc
);
const web3 = new Web3(ethereum);
```

### Step 3: Create Account

```javascript
const { user, address } = await ethereum.request({
  method: 'dekey_wallet_create',
  params: [{ password, accessToken }],
});
```

### Step 4: Send Transaction Implementation

```javascript
const tx = {
  to: address,
  value: web3.utils.toWei(amount, 'ether'),
};
const txHash = await ethereum.request({
  method: 'eth_sendTransaction',
  params: [tx],
});

const intervalID = setInterval(async () => {
  const receipt = await web3.eth.getTransactionReceipt(txHash);
  if (!receipt) {
    return;
  }
  if (receipt.status) {
    // handle tx success
    clearInterval(intervalID);
  }
  if (!receipt.status) {
    // handle tx failure
    clearInterval(intervalID);
  }
}, 5000);
```
