const express = require('express');
const Bed = require('../models/bed');
const router = express.Router();

// Routes for Beds
// router.get('/', async (req, res) => {
//     const beds = await Bed.find({}).populate('ward_id');
//     res.json(beds);
// });
router.get('/', async (req, res) => {
    try {
        const beds = await Bed.find().populate('ward'); // Fetch all bed documents and populate ward details
        console.log(beds); // Log the fetched data
        res.render('beds', { beds }); // Render the beds.ejs template with the data
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
module.exports = router;
