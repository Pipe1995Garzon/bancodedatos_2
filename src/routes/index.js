const express = require('express');
const router = express.Router();
const { isnotLoggedIn } = require('../lib/auth');

router.get('/',isnotLoggedIn, (req, res) => {
    res.render('index');
})

module.exports = router;