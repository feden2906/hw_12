const router = require('express').Router();

const { mwAuth } = require('../middlewares');
const { adminControllers } = require('../controllers');
const { ADMIN, MANAGER } = require('../constants/roles.enum');

router.route('/users')
    .get(mwAuth.checkAccessToken,
      mwAuth.checkRole([ADMIN, MANAGER]),
      adminControllers.getBlockedUsers);

router.route('/users/:userID')
    .put(mwAuth.checkAccessToken,
      mwAuth.checkRole([ADMIN, MANAGER]),
      adminControllers.changeUserStatus)

    .delete(mwAuth.checkAccessToken,
      mwAuth.checkRole([ADMIN]),
      adminControllers.deleteUser)

// router.route('/cars')
//     .delete(mwAuth.checkAccessToken,
//       mwAuth.checkRole,
//       adminControllers)

module.exports = router;
