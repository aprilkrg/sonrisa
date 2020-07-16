const ContactForm = require('../models/contactForm');

module.exports = {
    saveForm
}

async function saveForm(req, res) {
    const form = new ContactForm(req.body);
    try {
        await form.save();
    } catch (err) {
        res.status(500).json(err);
    }
}