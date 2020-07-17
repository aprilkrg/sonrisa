const Resource = require('../models/Resource');

module.exports = {
    index,
    create,
    update,
    delete: deleteOne,
}

async function index(req, res) {
    try{
        const resources = await Resource.find({user: req.user._id}).populate('user');
        res.status(200).json(resources);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function create(req, res) {
    req.body.user = req.user._id;
    try{
        const resource = await Resource.create(req.body);
        res.status(201).json(resource);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function update(req, res) {
    try{
        const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedResource);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function deleteOne(req, res) {
    try{
        const deletedResource = await Resource.findByIdAndRemove(req.params.id);
        res.status(200). json(deletedResource);
    }
    catch(err){
        res.status(500).json(err);
    }
}