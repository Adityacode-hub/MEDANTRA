const express = require('express');
const Bed = require('../models/bed');
const router = express.Router();

// Routes for Beds
router.get('/', async (req, res) => {
    const beds = await Bed.find({}).populate('ward_id');
    res.json(beds);
});

module.exports = router;
