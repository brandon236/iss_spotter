const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

/*fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});*/
//'154.20.233.190'

fetchCoordsByIP('154.20.233.190', (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coords:' , coords);
});
