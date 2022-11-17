const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const Schema = moongose.Schema;

const mySchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
});

const model = mongoose.model('Chat', mySchema);
module.exports = model;