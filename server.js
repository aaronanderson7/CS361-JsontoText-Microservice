var express = require('express');
var app = express();
var convert = require('json-to-plain-text');


app.use(express.json());


app.post('/json-to-text', (req, res) => {
    const body = req.body;
    const textData = convert.toPlainText(body);
    console.log(textData);
    res.send(textData)
    
 });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});