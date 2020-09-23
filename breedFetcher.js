const request = require('request');
//const util =require('util');

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

//console.log(args[0]);



const fetchBreedDescription = function(breedName, callback) {
  const address = URL + breedName;
 
  request(address,(err,response,body)=>{
  //console.log(typeof body);
  
    //console.log(data.length);

    if (err) {
      callback(err,null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null,"Request not found");
      } else {
        callback(null,data[0].description);
      }
    }
  
  //console.log(typeof data);
  //console.log('First entry of object'+ util.inspect(data[0].weight))
  });

};

module.exports = fetchBreedDescription;