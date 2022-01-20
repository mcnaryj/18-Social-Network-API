const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');
// comment routes, post routes, etc.
router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
