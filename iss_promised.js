const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const data = JSON.parse(body).ip;
  return request(`http://ipwho.is/${data}`)
};

const fetchISSFlyOverTimes = function(body) {
  const data = JSON.parse(body).response;
  let latitude = '49.27670';
  let longitude = '-123.13000';
  return  request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)

}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
}
module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };