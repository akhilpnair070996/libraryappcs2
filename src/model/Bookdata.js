const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.w3skl.mongodb.net/LIBRARYAPPS?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
author: String,
genre: String,
synopsis: String,
image: String
});
var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports = Bookdata;
