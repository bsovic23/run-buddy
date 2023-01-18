const router = require('express').Router();

const userRoutes = require('./user-routes');
const runRoutes = require('./run-routes');

router.use('/users', userRoutes);
router.use('/runs', runRoutes);

module.exports = router;