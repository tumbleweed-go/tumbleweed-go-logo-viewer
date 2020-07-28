const WHITE = '\x1b[37m';
const CYAN = '\x1b[36m';

var host = "localhost";
var port = 8000;
var express = require("express");
var ip = require("ip");

var app = express();

app.use(express.static(__dirname));
app.listen(port, ip.address());
app.get("/", function(req, res) {
    res.sendFile('index.html');
});

let localHost = `http://${host}:${port}`;
let ipHost = `http://${ip.address()}:${port}`;

app.listen(port, host);
process.stdout.write(`${CYAN}Starting server at the following locations:\n\n`);
process.stdout.write(`Local host:  ${localHost}\n`);
process.stdout.write(`IP host:     ${ipHost}\n${WHITE}`);
