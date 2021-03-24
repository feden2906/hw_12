const router = require('express').Router();

const { mwAuth } = require('../middlewares');
const { adminControllers } = require('../controllers');

router.route('/users')
    .get(adminControllers)
    .put(adminControllers)
    .delete(adminControllers)


router.route('/cars')
    .delete(adminControllers)

module.exports = router;
