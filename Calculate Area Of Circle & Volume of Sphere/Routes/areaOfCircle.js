/**
 * Function to calculate area of circle
 * and send back the response to client
 * @param {*} radius
 * @param {*} object
 * @param {*} metric
 * @param {*} res
 */
 function areaOfCircleRoute(radius, res) {
    // calculate area of circle
    const areaOfCircle = Math.PI * radius * radius;
    
    res.setHeader("Content-Type", "application/json");
    
    res.write("Area of circles is " +areaOfCircle);
    res.end();
  }
  
  module.exports.areaOfCircleRoute = areaOfCircleRoute;