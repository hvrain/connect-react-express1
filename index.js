const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

app.use('/api/data', function(req, res) {
    res.json({greeting: 'hello world'});
});

app.listen(port);

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/build')));

// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

console.log(`server running at http ${port}`);