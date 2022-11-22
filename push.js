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

let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/c0DwvTGgLo4:APA91bEfP-zSufAe54RLnBWwcx_4pC7re-Mf2TQOnL_KWmOYTqk_eRc2EoGubDfvWtGxTDV7lxBifRdbORsq_jF7SMaB-PL14SbOt3i4L_zFRlJYGuqQz2_XpEyErZwkeYy4PZ6hz1t9","expirationTime":null,"keys":{"p256dh":"BElqZTXhDXhr6rK_CBhppmdj-zoT6TyJsGXq2dIz9OZ2ra4TsgIi3kASopl7vm6lJI4Xx2dGRQj4XdAMAjSh_1I","auth":"OjnJnthV1IaI8GWyvzAkIw"}}

push.sendNotification(sub,'test message');

// console.log(vapidKeys);
