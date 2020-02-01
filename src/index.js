const http = require("http");
const getQueryString = require("./getQueryString")

http.createServer((request, response) => {
    response.writeHead(200, {"content-Type": "application/json"});
    response.write("HELLO WORLD! WELCOME TO THE INTERNET! \n");
    response.write(JSON.stringify({status: "success"}), "\n");
    response.write(JSON.stringify(getQueryString(request.url)));
    response.end();
}).listen(8080);
