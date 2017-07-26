const clients = require('./clients.json');
const city = process.argv[2];

let clientsByCity = clients.filter(function(term) {
  return (term.city.toLowerCase() == city.toLowerCase())
});

let searchOutput = clientsByCity.map(function(inquiry) {
  return {
     "id": inquiry.id,
     "rep_name": inquiry.rep_name,
     "company": inquiry.company,
     "city": inquiry.city,
     "state": inquiry.state
  }
});

console.log('Finding companies with name "' + city + '"...');
console.log (searchOutput);
