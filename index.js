const { fetchMyIP, fetchCoordsByIP,fetchISSFlyOverTimes, nextISSTimesForMyLocation,} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP("206.174.183.137",(error,  { lat, lng })=>{
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
    console.log('Latitude:' , lat, 'Longitude:', lng);

})

fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' },(error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('Data:' , data);
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});