const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
  city: String,
  date_modified: { type: Date, default: Date.now },
  email: String,
  name: String,
  phone: String,
  primary_contact: String,
  state: String
});

const School = mongoose.model('school', SchoolSchema);

module.exports = School;
