const router = require('express').Router();
const courseRoutes = require('./courseRoutes');
const studentRoutes = require('./studentRoutes');
// comment routes, post routes, etc.
router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);

module.exports = router;
