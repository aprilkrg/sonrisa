const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactFormSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    question: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('ContactForm', contactFormSchema);