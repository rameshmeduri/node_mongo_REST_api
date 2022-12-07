const moment = require('moment');

const e1 = {
  "department": "OPERATING",
  "billUnit": 3104616,
  "empId": "124N0402665",
  "empName": "ALLADA MURTHY RAO",
  "designation": "POINTSMAN-B",
  "station": "SLPM",
  "community": "GEN",
  "pc7Level": 1,
  "dob": moment('11-05-1988', 'DD-MM-YYYY').toDate(),
  "doa": moment('30-04-2014', 'DD-MM-YYYY').toDate()
};

console.log('%c==============item==================', 'color: MediumSpringGreen');
console.log(`%c ${JSON.stringify(e1, null, 2)}`, 'color: MediumSpringGreen');
console.log('%c==============item==================', 'color: MediumSpringGreen');