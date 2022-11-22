var push = require("web-push");

// let vapidKeys = {
//     publicKey: 'BFa69bGrT5I5-TSR-J-yxAtLFGAdA18uSVettZNGIJayCWGq3oLRCpAoUK1Qce-a3GGtVCyaJyR4RTOH8ve-iy4',
//     privateKey: 'Cjw0xfLyFpwy0ktB0CBS2FisYOpdVddzrrvBZN3OhTY'
//   };

let vapidKeys = {
  publicKey:
  "BDD_334ptQA5ykgSMOF7OdKSIt2NoUp9Plwnp3wlq_8r4VLIgJw85JdnhisqTMmhv6mjCtpG31cc57iYP6lTndU",
  privateKey: "LUdUsjoYTfGqvKj2QMXpTlUSoREL2AxOoCkjZVhi1ek",
};

push.setVapidDetails(
  'mailto:test@code.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
  );

let sub={"endpoint":"https://wns2-pn1p.notify.windows.com/w/?token=BQYAAABO%2fK72yR1i79YMFnlOl5FylbJT%2fLAvOhjuxV0rpeSC82DuKSltApDMrFw%2fTQUFNrV0AJ8XPH6%2b1m7SQqGHrpDIzQfB6V4Tx%2fupNX3ascg%2fzgOerA3Lfe954joO5QpVPAfYdne%2bLeGQCJBMCdSJvOWpKc3MKwBGgSI5UIu9Q4L1iHL379GNki3fc%2bKTO0yLu7S2c%2bcDKSBVppSz9H7UbLChnj5u7nNWHGPvWXMJ57%2b9JW77xW4xdZNsABHjfpiBr9guIr%2banz2K6gyvy5ExB8lQlBaB5p6aWeKRhbfl%2fnxv4nnXMg0%2fOpKw%2bb%2b0s%2f8aB3%2bgBnam7QUF87WYwYGsieqW4SAc4pgqbzm1tqAJbPe3ZA%3d%3d","expirationTime":null,"keys":{"p256dh":"BGpZphIcgmDno0Sa3KhpRWguyUwL3EL28GZLX9yQoG9VApr6puzwI7tikEZs_kvNE_dDli7bujYZM_MQCW_w2fQ","auth":"xLu2ez9nI2hVGsjJGmvY8Q"}}

push.sendNotification(sub,'test message');

// console.log(vapidKeys);
