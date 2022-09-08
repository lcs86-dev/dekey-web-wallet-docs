# MPC API

## Create Wallet

```javascript
const { user, address } = await ethereum.request({
  method: 'dekey_wallet_create',
  params: [{ password, accessToken }],
});
```

## Unlock

```javascript
await ethereum.request({
  method: 'dekey_unlock',
  params: [{ password }],
});
```

## Lock

```javascript
await ethereum.request({
  method: 'dekey_lock',
});
```

## Recover Wallet

```javascript
const { address } = await ethereum.request({
  method: 'dekey_wallet_recover',
  params: [{ password, user, accessToken }],
});
```
