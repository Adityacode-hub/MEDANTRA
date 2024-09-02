// const mongoose=require("mongoose");
// const Ward=require("./models/ward.js");
// const Bed=require("./models/bed.js");
// const Admin=require("./models/admin.js");
// main ().then((res)=>{console.log("connection successful")}).catch((err)=>{console.log(err)})
// async function main()
// {
//     await mongoose.connect('mongodb://127.0.0.1:27017/Hospital');
// }

// const wards = [
//     {
//         name: "General Ward",
//         location: "First Floor",
//         total_beds: 50,
//         admin_id: "admin1"
//     },
//     {
//         name: "ICU",
//         location: "Second Floor",
//         total_beds: 20,
//         admin_id: "admin2"
//     }
// ];
// Ward.insertMany(wards);

// const beds = [
//     {
//         ward_id: "ward1",
//         bed_number: 1,
//         is_occupied: false,
//         patient_id: null
//     },
//     {
//         ward_id: "ward1",
//         bed_number: 2,
//         is_occupied: true,
//         patient_id: "patient1"
//     },
//     {
//         ward_id: "ward2",
//         bed_number: 1,
//         is_occupied: false,
//         patient_id: null
//     }
// ];

// Bed.insertMany(beds);

// const admins = [
//     {
//         name: "John Doe",
//         email: "john@example.com",
//         contact_number: "1234567890",
//         ward_ids: ["ward1"]
//     },
//     {
//         name: "Jane Smith",
//         email: "jane@example.com",
//         contact_number: "0987654321",
//         ward_ids: ["ward2"]
//     }
// ];

// Admin.insertMany(admins);

// const mongoose = require("mongoose");
// const Ward = require("./models/ward.js");
// const Bed = require("./models/bed.js");
// const Admin = require("./models/admin.js");

// main().then(() => {
//     console.log("Connection successful");
//     return initData();
// }).catch((err) => {
//     console.log("Error connecting to MongoDB:", err);
// });

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/Hospital', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
// }

// async function initData() {
//     try {
//         // Clear existing data
//         await Ward.deleteMany({});
//         await Bed.deleteMany({});
//         await Admin.deleteMany({});

        
//         const admins = await Admin.insertMany([
//             { name: "John Doe", email: "john@example.com", contact_number: "1234567890" },
//             { name: "Jane Smith", email: "jane@example.com", contact_number: "0987654321" }
//         ]);

        
//         const wards = await Ward.insertMany([
//             { name: "General Ward", location: "First Floor", total_beds: 50, admin_id: admins[0]._id },
//             { name: "ICU", location: "Second Floor", total_beds: 20, admin_id: admins[1]._id }
//         ]);
        
       
//         await Bed.insertMany([
//             { ward_id: wards[0]._id, bed_number: 1, is_occupied: false },
//             { ward_id: wards[0]._id, bed_number: 2, is_occupied: true, patient_id: null },
//             { ward_id: wards[1]._id, bed_number: 1, is_occupied: false }
//         ]);

//         console.log("Database initialized with sample data");
//     } catch (err) {
//         console.error("Error initializing data:", err);
//     } finally {
//         mongoose.connection.close();
//     }
// }

// const mongoose = require('mongoose');
// const Admin = require('./models/admin');
// const Bed = require('./models/bed');
// const Ward = require('./models/ward');

// main().then(() => {
//     console.log('Connection successful');
//     return initData();
// }).catch((err) => {
//     console.log('Error connecting to MongoDB:', err);
// });

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/Hospital', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
// }

// async function initData() {
//     try {
      
//         await Admin.deleteMany({});
//         await Bed.deleteMany({});
//         await Ward.deleteMany({});

        
//         const admins = await Admin.insertMany([
//             { name: "John Doe", email: "john@example.com", contact_number: "1234567890" },
//             { name: "Jane Smith", email: "jane@example.com", contact_number: "0987654321" }
//         ]);

      
//         const wards = await Ward.insertMany([
//             { name: "General Ward", location: "First Floor", total_beds: 50, admin_id: admins[0]._id },
//             { name: "ICU", location: "Second Floor", total_beds: 20, admin_id: admins[1]._id }
//         ]);
        
       
//         await Bed.insertMany([
//             { ward_id: wards[0]._id, bed_number: 1, is_occupied: false },
//             { ward_id: wards[0]._id, bed_number: 2, is_occupied: true, patient_id: null },
//             { ward_id: wards[1]._id, bed_number: 1, is_occupied: false }
//         ]);

//         console.log('Database initialized with sample data');
//     } catch (err) {
//         console.error('Error initializing data:', err);
//     } finally {
//         mongoose.connection.close();
//     }
// }


const mongoose = require("mongoose");
const Ward = require("./models/ward.js");
const Bed = require("./models/bed.js");
const Admin = require("./models/admin.js");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Hospital');
    console.log("Database connected");

    await Admin.deleteMany({});
    await Ward.deleteMany({});
    await Bed.deleteMany({});

    
    let admins = [];
    for (let i = 1; i <= 100; i++) {
        admins.push({
            name: `Admin ${i}`,
            email: `admin${i}@hospital.com`,
            contact_number: `123456789${i}`,
            ward_ids: [] 
        });
    }

    const createdAdmins = await Admin.insertMany(admins);

    let wards = [];
    for (let i = 1; i <= 50; i++) {
        wards.push({
            name: `Ward ${i}`,
            location: `Floor ${Math.ceil(i/10)}`,
            total_beds: 20,
            admin_id: createdAdmins[i % createdAdmins.length]._id
        });
    }

    const createdWards = await Ward.insertMany(wards);

    let beds = [];
    createdWards.forEach((ward, index) => {
        for (let j = 1; j <= ward.total_beds; j++) {
            beds.push({
                ward_id: ward._id,
                bed_number: j,
                is_occupied: Math.random() < 0.5,
                patient_id: null 
            });
        }
    });

    await Bed.insertMany(beds);

    console.log("Database initialized with large datasets");
}

main().catch(err => console.log(err));
