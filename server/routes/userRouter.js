const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.regictration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

module.exports = router;