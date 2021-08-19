const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.w3skl.mongodb.net/LIBRARYAPPS?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
const Schema = mongoose.Schema;
const SignupSchema = new Schema({
    fname: String,
    lname: String,
mobnumber: String,
email: String,
password: String,
confirmpwd: String
});
var Signupdata=mongoose.model('signupdata',SignupSchema);
module.exports = Signupdata;
