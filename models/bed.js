const mongoose=require("mongoose");
const bedSchema = new mongoose.Schema({
    ward_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ward',
        required: true
    },
    bed_number: {
        type: Number,
        required: true
    },
    is_occupied: {
        type: Boolean,
        required: true
    },
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient', 
        default: null
    }
});

const Bed= mongoose.model("Bed", bedSchema);
module.exports=Bed;



// const mongoose = require('mongoose');

// const bedSchema = new mongoose.Schema({
//     ward_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ward', required: true },
//     bed_number: { type: Number, required: true },
//     is_occupied: { type: Boolean, required: true },
//     patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', default: null }
// });

// const Bed = mongoose.model('Bed', bedSchema);
// module.exports = Bed;

