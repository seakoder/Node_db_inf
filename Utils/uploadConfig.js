const multer = require('multer');
const storage = multer.diskStorage({
    destination: 'Uploads/',
    filename: function(req,file,callback) {
        const fileName = Date.now() + '~' + Math.round(Math.random() * 1E2) + '~' + file.originalname;
        req.body.image = fileName;
        callback(null, fileName);
    }
})
const upload = multer({storage: storage})

module.exports = upload;