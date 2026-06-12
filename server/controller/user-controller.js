const User = require('../schema/user-schema.js');

const getUser = async (req,res) =>{
    try {
        const users = await User.find({});  // get all data from the database
        res.status(200).json(users);
    } catch (error) {
        console.log("Error while fetch data", error);
    }
}

const deleteData = async (req,res) =>{
    try {
        await User.deleteOne({_id:req.body.id});
        res.status(201).json("Data Deleted");
    } catch (error) {
        console.log("Error while Delete data", error);
    }
}

module.exports = {getUser, deleteData}