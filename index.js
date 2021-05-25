const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use('/api/data', function(req, res) {
    res.json({greeting: 'hello world'});
});

app.listen(port);

console.log(`server running at http ${port}`);