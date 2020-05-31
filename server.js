const express = require("express");
const bodyParser = require("body-parser")
const fs = require("fs")
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(
    express.static(__dirname + "/public")
)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
app.get("/users", (req, res) => {
    console.log('neko trazi podatke');
    res.sendFile(__dirname + "/users.json");
})
app.post("/newUser", (req, res) => {
    console.log('Neko je poslao podatke');
    fs.writeFileSync("babaPodaci.txt", req.body.name)
    res.send("primljeni podaci")
})






app.listen(3000, () => {
    console.log('Server pokrenut');
});