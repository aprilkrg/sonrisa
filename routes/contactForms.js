const express = require('express');
const router = express.Router();
const contactFormsCtrl = require('../controllers/contactForms');

/*---------- Public Routes ----------*/
router.post('/contact', contactFormsCtrl.saveForm);



/*---------- Protected Routes ----------*/




module.exports = router;