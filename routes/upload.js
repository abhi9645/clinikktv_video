const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router()

const videoStorage = multer.diskStorage({
    destination: 'videos', // Destination to store video 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
});

const videoUpload = multer({
    storage: videoStorage,
    limits: {
        fileSize: 10000000   
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(mp4|MPEG-4)$/)) {    
            return cb(new Error('Please upload a Video'))
        }
        cb(undefined, true)
    }
})

router.post('/uploadVideo', videoUpload.single('video'), (req, res) => {
    
    
}, (error, req, res, next) => {
    if(error){
    res.status(400).send({ error: error.message })}
        else{
            res.send(req.file)
        }
})

module.exports = router
