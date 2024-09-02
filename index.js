const express=require("express");
const mongoose=require("mongoose");
const path =require("path");
const Ward = require("./models/ward.js");
const Bed = require("./models/bed.js");
const Admin = require("./models/admin.js");
const app=express();
main ().then((res)=>{console.log("conection successful")}).catch((err)=>{console.log(err)});
async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/Hospital');
}

app.set("views",path.join(__dirname,'views'));

app.set("view engine",'ejs');


app.use(express.static(path.join(__dirname,'public')));//using the css

app.get("/",(req,res)=>{res.send("root is working")});
app.get("/ward",async(req,res)=>{
    let ward= await Ward.find();
    console.log(ward);
    res.render("index.ejs",{ward});

})

app.get("/bed",async(req,res)=>{
    let bed= await Bed.find();
    console.log(bed);
    res.render("index.ejs",{bed});

})
app.get("/admin",async(req,res)=>{
    let admin= await Admin.find();
    console.log(admin);
    res.render("index.ejs",{admin});

})

app.listen(3030,()=>{console.log("server is listening to port 3030");});

// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');
// const Ward = require('./models/ward');
// const Bed = require('./models/bed');
// const Admin = require('./models/admin');
// const app = express();

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/Hospital');
//     console.log('Connected to MongoDB');
// }
// main().catch(err => console.log(err));

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', async (req, res) => {
//     try {
//         const admins = await Admin.find({}).populate('ward_ids');
//         const Ward = await Ward.find({}).populate('admin_id');
//         const beds = await Bed.find({}).populate('ward_id');

//         res.render('index', { admins, wards, beds });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Error retrieving data');
//     }
// });

// app.listen(3030, () => {
//     console.log('Server is running on port 3030');
// });
