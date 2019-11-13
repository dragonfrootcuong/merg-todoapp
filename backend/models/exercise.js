const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExcersiceSchema = new Schema(
    {
        username: {type: String, required: true},
        description: {type: String, required: true},
        duration: {type: Number, required: true},
        date: {type: Date, required: true}
    },
    {
        timestamps: true,
    }
);

const Excersice = mongoose.model('Excersice', ExcersiceSchema);
module.exports = Excersice