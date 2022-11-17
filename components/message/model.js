const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const Schema = moongose.Schema;

const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

const model = mongoose.model('Message', mySchema);
module.exports = model;