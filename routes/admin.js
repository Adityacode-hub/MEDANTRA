const express = require('express');
const Admin = require('../models/admin');
const router = express.Router();

// Routes for Admins
router.get('/', async (req, res) => {
    const admins = await Admin.find({}).populate('ward_ids');
    res.json(admins);
});

module.exports = router;
