const express = require('express');
const User = require('../schema/user-schema.js');
const multer = require('multer');

const router = express.Router();

// handle file in server side 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/add', upload.single('image'), async (req, res) => {
    try {
        const files = req.file;
        const user = await new User({
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            image: files.filename
        });
        await user.save();
        res.status(201).json("Data Inserted");
    } catch (error) {
        console.log("Error while insert data", error);
    }
});

module.exports = router;