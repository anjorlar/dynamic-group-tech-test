const mongoose = require('mongoose')
const settings = require('../config/settings')
const connectionUri = settings.MONGODB.MONGOURL;

mongoose.connect(connectionUri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((res) => {
        console.log(`connected successfully with Database: ${res.connections[0].name},
        `)
    })
    .catch((error => { console.log(`error connecting`, error); process.exit(1); }));

module.exports = mongoose;