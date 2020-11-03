const express = require('express');
const axios = require('axios');
const moment = require('moment');
const router = express.Router();

/* GET users listing. */
router.get('/menu', async (req, res, next) => {

  // const year = moment().format('YYYY');
  // const month =  moment().format('MM');
  // const day = moment().format('DD');

  // const siteData = await axios.get(`http://www.samil.hs.kr/main.php?menugrp=060501&master=meal2&act=list&SearchYear=${year}&SearchMonth=${month}&SearchDay=${day}`);
  // const pattern = /<th>중식 메뉴\s+<\/th>\s+<\/tr>\s+<\/thead>\s+<tbody>\s+<tr>\s+<td>\s+<p>\s+<img [^>]+>\s+<\/p>([^<]+)<\/td>/g;
  // const result = pattern.exec(siteData.data);

  res.send('맥도날드 빅맥세트'); 
    
  // res.send(result[1].trim()); 
 
});

module.exports = router;
