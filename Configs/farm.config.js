const { config } = require('dotenv')
const mongoose = require('mongoose')
require('dotenv').config()
DB = process.env.MONGO_URL

mongoose.connect(DB)
.then(()=>{
    console.log(`Database connected Successfully`)
})
.catch((err)=>{
    console.log(err.message)
})

module.exports = config

