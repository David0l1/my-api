require("./settings");
const http = require("http");
const app = require("./index");
const PORTHOST = port || 5000;

http.createServer(app).listen(PORTHOST, () => {
    console.log(`Server running on http://localhost:` + PORTHOST)
console.log(`Hello ${creator}`)
})
