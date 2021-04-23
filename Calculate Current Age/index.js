// Step 1: Import HTTP and URL module
const http = require("http");
const url = require("url");
const areaOfCircleFile = require("./routes/currentAge");


// create server function
http
  .createServer(function (req, res) {
    // path variables
    const path = req.url;

    // query params from path
    const queryParamsObject = url.parse(path, true).query;

    // creating routes
    if (path.includes("age")) {
      const name = queryParamsObject.name;
      const year = queryParamsObject.year;
      const age = queryParamsObject.age;
      areaOfCircleFile.areaOfCircleRoute(name, year, res, age);
    
    
    } else {
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Hello World<h1>");
      
      res.end();
    }
  })
  .listen(8080);