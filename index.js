const fetchBreedDescription = require("./breedFetcher");
const args = process.argv.splice(2);

fetchBreedDescription(args[0], (err, description) => {
  if (err) {
    console.log(`Error fetch details : ${err}`);
  } else {
    console.log(description);
  }
});
