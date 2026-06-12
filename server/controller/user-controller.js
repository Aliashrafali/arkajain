const User = require('../schema/user-schema.js');

const getUser = async (req,res) =>{
    try {
        const users = await User.find({});  // get all data from the database
        res.status(200).json(users);
    } catch (error) {
        console.log("Error while fetch data", error);
    }
}

module.exports = {getUser}