# User Signing

## Get Auth Token for Nft Server

```javascript
import Web3Token from 'web3-token';

const token = await Web3Token.sign(async (msg) => {
  return web3.eth.personal.sign(msg, address);
}, '1d');
```
