const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/webapi', function(req, res) {
  var word = req.query.word;
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://dapi.kakao.com/v3/search/book?query='+encodeURI(word),
    'headers': {
      'Authorization': 'KakaoAK 62ecc8a4a163e78b24348694a6d18cf9',
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.send(response.body);
  });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))