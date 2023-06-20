const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://carrental:ahmet1905Aa@carrental.lkbbbd8.mongodb.net/carrental' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Bağlanıldı')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB HATA Bağlanılamadı')
    })


}

connectDB()

module.exports = mongoose