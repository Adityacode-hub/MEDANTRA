const express = require('express');
const Ward = require('../models/ward');
const router = express.Router();

// Routes for Wards
router.get('/ward', async (req, res) => {
    const wards = await Ward.find({}).populate('admin_id');
    res.json(wards);
});

module.exports = router;
