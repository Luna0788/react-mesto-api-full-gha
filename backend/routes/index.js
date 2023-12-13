const router = require('express').Router();

const userRouter = require('./users');
const cardRouter = require('./cards');

// const { NOT_FOUND_CODE } = require('../utils/constants');

router.use('/users', userRouter);
router.use('/cards', cardRouter);

module.exports = router;
