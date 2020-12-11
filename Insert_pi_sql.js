const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const db = mysql.createConnection({
    host: '192.168.0.104',
    user: 'user',
    password: '@Jj068209',
    database: 'Temperature',
    port: 3306
});


db.connect();

app.post('/add', function (req, res) {
    var Hummudity = req.body.Hummudity;
    var Temp = req.body.Temp;

    const sql = `INSERT INTO Temperature(Temp,Hummunity) VALUES('${Temp}','${Hummudity}')`;
    const query = db.query(sql, function (err, results) {
        if (err) {
            throw err;
        }
        console.log(results);

        res.send(`SECCESS!!! Temp = ${Temp} and Hummudity = ${Hummudity}`);
    });
});

app.listen('3000', function () {
    console.log('start port 3000');
});