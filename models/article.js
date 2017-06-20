var mongoose = require("mongoose");
// var Comment = require("./comment.js");

var articleSchema = mongoose.Schema({
    title: String,
    link: String,
    pubDate: String
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;