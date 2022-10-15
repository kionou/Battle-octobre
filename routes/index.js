var express = require('express');
var router = express.Router();
let controlUser = require('../Controllers/ControllersUser')

/* GET home page. */
router.get('/',controlUser.AddUser);

module.exports = router;
