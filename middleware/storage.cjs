const multer  = require('multer')
const fs = require("fs");
const path = require("path");

const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("file coming in:", file)
        //"user_id:" , req.body.user_id,
        console.log("file.mimetype", file.mimetype);
        const acceptTypes = ['image/jpeg',"image/png"];

        let error = null;
        if(!acceptTypes.includes(file.mimetype)){
            error = new Error('wrong file');
        }
        const dir = 'uploads/'  ;

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        cb(null, dir)
    },
    filename: function (req, file, cb) {
        //console.log("session",req.session);
        console.log("file::", file)
        //Date.now() +
        //path.extname(file.originalname)
        cb(null, path.extname(file.originalname))
    }
})

const certificateStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("file coming in:", file)
        const acceptTypes = ['image/jpeg',"image/png", "application/pdf"];

        let error = null;
        if(!acceptTypes.includes(file.mimetype)){
            error = new Error('wrong file');
        }

        const dir = `public/assets/certificates/${req.session.user._id}/` ;

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        cb(null, dir)
    },
    filename: function (req, file, cb) {
        console.log("file info:" , file)
        //Date.now() +
        //path.extname(file.originalname)
        cb(null, file.originalname )
    }
})

module.exports = {imageStorage, certificateStorage}