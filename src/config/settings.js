require("dotenv").config()
const settings = {
    PORT: process.env.PORT,
    MONGODB: {
        MONGOURL: process.env.MONGODBURL
    }
}

module.exports = settings