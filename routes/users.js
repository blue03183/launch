var express = require('express');
var router = express.Router();
const { Expo } = require('expo-server-sdk');

const expo = new Expo();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 토큰저장
router.post('/token', (req, res) => {
  const token = req.body.token.value;

  if (!userTokens.includes(token)) {
    userTokens.push(token);
  }

  res.send(`토큰이 저장되었습니다. ${token}`);  
});

router.post('/message', async (req, res) => {
  const message = '맥도날드 빅맥세트';
  const notifications = [];

  for (const pushToken of userTokens) {
    console.log('----------------pushToken----------------');
    console.log(pushToken);
    if (!Expo.isExpoPushToken(pushToken)) {
      console.log('에러!');
      continue;
    }

    notifications.push({
      to: pushToken,
      sound: 'default',
      title: '메세지가 도착했습니다.',
      body: message,
      data: { message }
    });
  }

  let chunks = expo.chunkPushNotifications(notifications);

  for (let chunk of chunks) {
    try {
      let receipts = await expo.sendPushNotificationsAsync(chunk);
      console.log(receipts);
    } catch (error) {
      console.error(error);
    }
  }

  res.send('메시지 전송');
});

router.get('/tokenLists', (req, res) => {
  res.send(`tokens: ${userTokens.join()}`);
});



module.exports = router;
