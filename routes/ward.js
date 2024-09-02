const express = require('express');
const Ward = require('../models/ward');
const router = express.Router();

// Routes for Wards
// router.get('/ward', async (req, res) => {
//     const wards = await Ward.find({}).populate('admin_id');
//     res.json(wards);
// });
router.get('/', async (req, res) => {
    try {
        const wards = await Ward.find(); // Fetch all ward documents
        console.log(wards); // Log the fetched data
        res.render('wards', { wards }); // Render the wards.ejs template with the data
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
