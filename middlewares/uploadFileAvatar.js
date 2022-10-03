const path = require('path');
const multer = require('multer');

const storageImageAvatar = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/images/avatars' )
    
    },
    filename : (req,file,callback) => {
        callback(null,'avatar-' + Date.now() + path.extname(file.originalname))
        /* callback(null,`product-${Date.now()}${path.extname(file.originalname)}`) */
    }
});

const uploadImageAvatar = multer({
    storage : storageImageAvatar
});

module.exports = {
    uploadImageAvatar
}