var push = require('web-push');

let vapidKeys = {
    publicKey: 'BFa69bGrT5I5-TSR-J-yxAtLFGAdA18uSVettZNGIJayCWGq3oLRCpAoUK1Qce-a3GGtVCyaJyR4RTOH8ve-iy4',
    privateKey: 'Cjw0xfLyFpwy0ktB0CBS2FisYOpdVddzrrvBZN3OhTY'
  };

  push.setVapidDetails(
    'mailto:test@code.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey,
    );

  let sub={
    endpoint:"https://fcm.googleapis.com/fcm/send/e85YprdTOPM:APA91bHjRxP-5UHGJSdMInn8K0lVOauxMb_EfprGoCkeGZTL-2W1MlHqpgyUR6K3jg1tiQePrgwVNKr99r4ZShK1OVuK1XZXF-yfZXPoFue1uRTGzSX3MKx7-3HOWs7h3iPkJCLEeYD3",
  expirationTime:null,
  keys:{
    p256dh:"BGRiiu8XeWM6hHYL6hNn6xkVAvX17P50QdVlME1pJg-ceZT_2BOGJRu5phfbW5F3_0-hkUVxKmID7CmWmaHxF64",
    auth:"PfMtEfAL8Q8WinbOsihulg"
    };
};

  push.sendNotification(sub,'test message');