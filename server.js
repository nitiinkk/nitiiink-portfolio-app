const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'src', './index.html'), function (err) {
        if(err) {
            next(err);
        }
    });
})

app.use((err, req, res, next) => {
    res.status(500).send('Oops Something went wrong... ' + err);
})

app.listen(3000, () => {
    console.log('Server Started on PORT 3000');
})