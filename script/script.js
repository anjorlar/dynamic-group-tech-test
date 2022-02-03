// script to upload or delete data

// const dotenv = require('dotenv');
require("dotenv").config()
const fs = require('fs');
const mongoose = require('mongoose');
const settings = require('../src/config/settings')
const connectionUri = settings.MONGODB.MONGOURL;
const Item = require('../src/model/item');

console.log("connectionUri >>>>>", connectionUri)
mongoose
    .connect(connectionUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const items = JSON.parse(
    fs.readFileSync(`${__dirname}/item.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Item.create(items);
        console.log('Data successfully loaded!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Data successfully deleted!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};
// console.log(process.argv)
if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}
