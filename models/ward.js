const mongoose=require("mongoose");
const wardSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    total_beds: {
        type: Number,
        required: true
    },
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    }
});

const Ward= mongoose.model('Ward', wardSchema);
module.exports=Ward;



// const mongoose = require('mongoose');

// const wardSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     location: { type: String, required: true },
//     total_beds: { type: Number, required: true },
//     admin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true }
// });

// const Ward = mongoose.model('Ward', wardSchema);
// module.exports = Ward;
