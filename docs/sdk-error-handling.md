# SDK Error Handling

## Unlock

```javascript
try {
  await ethereum.request({
    method: 'dekey_unlock',
    params: [{ password }],
  });
} catch (err) {
  console.log(err);
  // {
  //   code: -32603;
  //   data: {
  //     originalError: {name: 'ERR_UNLOCK_INCORRECT_PASSWORD', message: 'Mpc unlock error: incorrect password'};
  //   }
  //   message: "Mpc unlock error: incorrect password";
  // }
}
```

## Create Wallet

```javascript
try {
  await ethereum.request({
    method: 'dekey_wallet_create',
    params: [{ password }],
  });
} catch (err) {
  console.log(err);
}
```

## Recover Wallet

```javascript
try {
  await ethereum.request({
    method: 'dekey_wallet_recover',
    params: [{ password, user, wallets }],
  });
} catch (err) {
  console.log(err);
}
```

## Sending a Transaction

```javascript
try {
  await web3.eth.sendTransaction({
    to: address,
    value: web3.utils.toWei(amount, 'ether'),
  });
} catch (err) {
  console.log(err);
}
```

## Signing a Data

```javascript
try {
  await web3.eth.personal.sign(msg, address);
} catch (err) {
  console.log(err);
}
```
