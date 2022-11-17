const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const Schema = moongose.Schema;

const mySchema = new Schema({
    name: String,
});

const model = mongoose.model('User', mySchema);
module.exports = model;