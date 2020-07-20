const ContactForm = require('../models/contactForm');

module.exports = {
    index,
    create,
    update,
    delete: deleteOne,
}

async function index(req, res) {
    try{
        const contactForms = await ContactForm.find();
        res.status(200).json(contactForms);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function create(req, res) {
    req.body.user = req.user._id;
    try{
        const contactForm = await ContactForm.create(req.body);
        res.status(201).json(contactForm);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function update(req, res) {
    try{
        const updatedContactForm = await ContactForm.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedContactForm);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function deleteOne(req, res) {
    try{
        const deletedContactForm = await ContactForm.findByIdAndRemove(req.params.id);
        res.status(200). json(deletedContactForm);
    }
    catch(err){
        res.status(500).json(err);
    }
}