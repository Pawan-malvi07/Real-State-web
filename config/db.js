const mongoose = require("mongoose")


const dbconnect = () => {    
    try{
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log ("database connected")
    } catch (error){
            console.log("database error")
    }
}

module.exports = dbconnect;