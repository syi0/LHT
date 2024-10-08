const express = require('express');
const app = express();
const port = 3000
const sqlite3 = require('sqlite3');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('build'));
app.use("/login",express.static('build'));
app.use("/register",express.static('build'));



app.post('/api/db', (req, res) => {
    const db = new sqlite3.Database('users.db');
    db.serialize(() => {
        db.all(req.body.query, (err, result) => {    
            res.send(result);
            console.log(result);
        });
    });
    db.close();
    
    console.log(req.body);
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
