const router = require('express').Router();

const authRouter = require('./auth.routers');
const adminRouter = require('./admin.routers');
const carRouter = require('./car.routers');
const userRouter = require('./user.routers');

router.use('/auth', authRouter);
router.use('/admin', adminRouter);
router.use('/cars', carRouter);
router.use('/users', userRouter);

module.exports = router;
