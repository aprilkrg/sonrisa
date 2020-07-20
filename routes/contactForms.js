const router = require('express').Router();
const contactFormsCtrl = require('../controllers/contactForms');

router.get('/', checkAuth, contactFormsCtrl.index);
router.post('/', checkAuth, contactFormsCtrl.create);
router.delete('/:id', checkAuth, contactFormsCtrl.delete);

function checkAuth(req, res, next) {
    if(req.user) return next();
    return res.status(501).json({msg: 'Not Authorized'});
}

module.exports = router;