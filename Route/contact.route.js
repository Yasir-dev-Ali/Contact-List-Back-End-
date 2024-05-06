const express = require('express');
const router = express.Router();
const {getContactList,createContact, updateContact,deleteContact} = require('../controller/contact.controler');

router.route('/:id',).get(getContactList); 



// Post Method
router.route('/').post(createContact);

// Put Method
router.route('/:id').put(updateContact);

// Delete Method

router.route('/:id').delete(deleteContact);
module.exports = router;
