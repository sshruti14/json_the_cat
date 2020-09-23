const request = require('request');
//const util =require('util');
const args = process.argv.splice(2);

//console.log(args[0]);

request(`https://api.thecatapi.om/v1/breeds/search?q=${args[0]}`,(err,response,body)=>{
  //console.log(typeof body);
  
  //console.log(data.length);

  if (err) {
    console.log("Error found is : " + err);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed Not found');
    } else {
      console.log(data);
    }
  }
  
  //console.log(typeof data);
  //console.log('First entry of object'+ util.inspect(data[0].weight))
});