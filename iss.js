const request = require('request');

const fetchMyIP = function(callback) {
  request(`https://api.ipify.org?format=json`, function(error, response, body) {
  if (error) {
    callback(error, null);
    return;
  }
  // if non-200 status, assume server error
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }
  const ip = JSON.parse(body).ip;  
  callback(error, ip);
  });
};

module.exports = { fetchMyIP };

/**/
