const mongoose = require('mongoose');

const Connection = async () =>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        if(connect){
            console.log("DB Connected");
        }
    } catch (error) {
        console.log("Error while connecting DB", error);
    }
}

module.exports = Connection;