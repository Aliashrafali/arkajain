const User = require('../schema/user-schema.js');

const getUser = async (req, res) => {
    try {
        const users = await User.find({});  // get all data from the database
        res.status(200).json(users);
    } catch (error) {
        console.log("Error while fetch data", error);
    }
}

const deleteData = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.body.id });
        res.status(201).json("Data Deleted");
    } catch (error) {
        console.log("Error while Delete data", error);
    }
}

const getUsersEditData = async (req, res) => {
    try {
        const editdata = await User.findById({ _id: req.body.id }); // No SQL Query Language 
        res.json(editdata);
    } catch (error) {
        console.log("Errro While get edit data", error);
    }
}

const updateData = async (req, res) => {
    try {
        await User.updateOne({ _id: req.body._id }, {
            $set: {
                name: req.body.name,
                mobile: req.body.mobile,
                email: req.body.email
            }
        });
        res.status(201).json("Data Updated");
    } catch (error) {
        console.log("Error while editdata", error);
    }
}


module.exports = { getUser, deleteData, getUsersEditData, updateData }