// Step 1: Import HTTP and URL module
const http = require("http");
const url = require("url");

const fruitsDataFile = require("./routes/vegetablesData");
// create server function
http
  .createServer(function (req, res) {
    // path variables
    const path = req.url;

    // query params from path
    const queryParamsObject = url.parse(path, true).query;

    
    if (path.includes("vegetablesData")) {
      // address of JSON file
      const pathString = `${__dirname}/data/vegetablesData.json`;
      //   console.log(pathString);
      fruitsDataFile.fruitsDataRoute(pathString, res);
      // read a file from local project directory
    } else {
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Hello World<h1>");
      res.write("<h2>Site description</h2>");
      res.end();
    }
  })
  .listen(8080);