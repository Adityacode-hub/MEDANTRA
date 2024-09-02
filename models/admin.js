const mongoose=require("mongoose");
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact_number: {
        type: String,
        required: true
    },
    ward_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wards'
    }]
});

const Admin= mongoose.model("Admin", adminSchema);
module.exports=Admin;

// const mongoose = require('mongoose');

// const adminSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     contact_number: { type: String, required: true },
//     ward_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ward' }]
// });

// const Admin = mongoose.model('Admin', adminSchema);
// module.exports = Admin;
