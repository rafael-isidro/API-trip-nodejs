const router = require('express').Router();

const serviceRouter = require('./services');
const tripRouter = require('./trips');

router.use('/', serviceRouter);
router.use('/', tripRouter);

module.exports = router;