const {Router} = require('express');
const router = Router();



// Get all arts
router.use('/art', require('./arts.js'));




module.exports = router;