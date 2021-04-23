/**
 * Function to calculate area of circle
 * and send back the response to client
 * @param {*} radius
 * @param {*} object
 * @param {*} metric
 * @param {*} res
 */
 function volumeOfSphereRoute(radius, res) {
    // calculate volume of sphere
    const volumeOfSphere = 4/3 * 3.14 * radius * radius * radius;
    
    res.setHeader("Content-Type", "application/json");
  
    res.write("Volume Of Sphere is " +volumeOfSphere);
    res.end();
  }
  
  module.exports.volumeOfSphereRoute = volumeOfSphereRoute;