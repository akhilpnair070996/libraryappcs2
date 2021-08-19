const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.w3skl.mongodb.net/LIBRARYAPPS?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    author: String,
book: String,
genre: String,
info: String,
image: String
});
var Authordata = mongoose.model('authordata',AuthorSchema);
module.exports = Authordata;
