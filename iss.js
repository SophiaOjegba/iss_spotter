const request = require('request');

const fetchMyIP = function(callback) {
  request.get("https://api64.ipify.org?format=json", (error, response, body)=>{
 // error can be set if invalid domain, user is offline, etc.
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

    const ip = JSON.parse(body);
    console.log(ip);
    callback(error, ip);
  });
 

};

const fetchCoordsByIP = function(ip, callback) {
const apiUrl = `http://ipwho.is//${ip}`;

  request.get(apiUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      try {
        const data = JSON.parse(body);
        const lat = data.latitude;
        const lng = data.longitude;
        // Pass back latitude and longitude via the callback function
        callback(error, { lat, lng });
      } catch (parseError) {
        callback(parseError, null);
      }
    }
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };