const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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