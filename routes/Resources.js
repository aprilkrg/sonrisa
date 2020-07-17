const router = require('express').Router();
const resourcesCtrl = require('../controllers/Resources');

router.get('/', checkAuth, resourcesCtrl.index);
router.post('/', checkAuth, resourcesCtrl.create);
router.put('/:id', checkAuth, resourcesCtrl.update);
router.delete('/:id', checkAuth, resourcesCtrl.delete);

function checkAuth(req, res, next) {
    if(req.user) return next();
    return res.status(501).json({msg: 'Not Authorized'});
}

module.exports = router;