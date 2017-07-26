const clients = require('./clients.json');
const company = process.argv[2];

const clientsByCompany = clients.filter(function(term) {
  return (term.company.toLowerCase().startsWith(company.toLowerCase()))
});

let searchOutput = clientsByCompany.map(function(inquiry) {
  return {
    "id": inquiry.id,
    "company": inquiry.company,
    "phone": inquiry.phone
  }
});

console.log ('Finding companies with name "' + company + '"...');
console.log (searchOutput);
