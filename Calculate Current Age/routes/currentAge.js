/**
 * Function to calculate area of circle
 * and send back the response to client
 * @param {*} name
 *  @param {*} year
 * @param {*} age
 *  @param {*} res
 */
 function areaOfCircleRoute(name, year, res) {
   
    const studentName = name;
    const  d = new Date(); 
	const currentYear = d.getFullYear();
    const age = Math.abs(currentYear - year);

   
    res.setHeader("Content-Type", "application/json");
   
    res.write("<p>hello " +name+ "</p>");
    res.write('\n');
    res.write("<p>You are currently " +age+ " years old</p>");
    res.end();
  }
  
  module.exports.areaOfCircleRoute = areaOfCircleRoute;