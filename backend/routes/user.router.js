const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.Ctrl');
const tokenValidator = require('../middlewares/TokenValidator');

router.post("/register", userController.register);
router.post('/login', userController.login);
router.patch('/update',tokenValidator, userController.update);

module.exports = router;
