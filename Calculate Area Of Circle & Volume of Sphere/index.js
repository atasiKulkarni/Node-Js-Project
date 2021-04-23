// Step 1: Import HTTP and URL module
const http = require("http");
const url = require("url");
const areaOfCircleFile = require("./routes/areaOfCircle");
const areaOfTriangleFile = require("./routes/volumeOfSphere");

// create server function
http
  .createServer(function (req, res) {
    // path variables
    const path = req.url;

    // query params from path
    const queryParamsObject = url.parse(path, true).query;

    // creating routes
    if (path.includes("calculateAreaOfCircle")) 
    {
      const radius = queryParamsObject.radius;
      
      areaOfCircleFile.areaOfCircleRoute(radius, res);
    } 
    else if (path.includes("calculateVolumeOfSphere")) 
    {
        const radius = queryParamsObject.radius;
         areaOfTriangleFile.volumeOfSphereRoute(radius, res);
    } 
     else 
     {
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Hello World<h1>");
      res.write("<h2>Site description</h2>");
      res.end();
    }
  })
  .listen(8080);