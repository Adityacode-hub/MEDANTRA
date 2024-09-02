const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');


// // Routes for Admins
// router.get('/', async (req, res) => {
//     const admins = await Admin.find({}).populate('ward_ids');
//     res.json(admins);
// });

// module.exports = router;

router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find();
        console.log(admins); 
        res.render('index', { admin: admins });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});


module.exports = router;