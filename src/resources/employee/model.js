const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  department: String,
  billUnit: Number,
  empId: String,
  empName: String,
  designation: String,
  dob: Date,
  station: String,
  community: String,
  doa: Date,
  pc7Level: Number
});

const Employee = mongoose.model('employee', EmployeeSchema);

module.exports = Employee;
