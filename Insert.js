const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



const db = mysql.createConnection({
    host: 'hostname GCP',
    port: 3306,
    user: 'username',
    password: 'password',
    database: 'DB'
});

db.connect();


app.post('/add', function (req, res) {
    var Hummudity = req.body.Hummudity;
    var Temp = req.body.Temp;

    const sql = `INSERT INTO Temperature(Temperature,Humudity) VALUES('${Hummudity}','${Temp}')`;
    const query = db.query(sql, function (err, results) {
        if (err) {
            throw err;
        }
        console.log(results);

        res.send(`SECCESS!!! Temp = ${Temp} and Hummudity = ${Hummudity}`);
    });
});

app.listen('3001', function () {
    console.log('start port 3001');
});
