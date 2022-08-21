const express = require('express');
const router = express.Router();
const pool = require('../database');
const SetEmployed = require('../controllers/users');
const { isLoggedIn } = require('../lib/auth');
const { isnotLoggedIn } = require('../lib/auth');
//add employed
router.get('/register_employees', isLoggedIn, (req, res) => {
    res.render('users/add_users');
});
//add employed
router.post('/register_employed', SetEmployed.addEmployedController);

//list employed
router.get('/list_employees', isLoggedIn, SetEmployed.listEmployedController);

//delete employed
router.get('/delete_employees/:id', isLoggedIn, SetEmployed.deleteEmployedController);

//update employed
router.post('/update_employees/:id', isLoggedIn, SetEmployed.updateteEmployedController);

//complete register get
router.get('/complete_register', isLoggedIn, SetEmployed.formCompletedRegisterController);

//complete register post
router.post('/completed_register', isLoggedIn, SetEmployed.formCompletedRegisterPostController);


module.exports = router;