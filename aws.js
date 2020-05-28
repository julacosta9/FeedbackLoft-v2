const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const moment = require("moment");

function formatFilename(filename) {
    const date = moment().format("YYYYMMDD");
    const randomString = Math.random().toString(36).substring(2, 7);
    const [cleanFileName] = filename
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-") // replaces spaces with dashes and keeps alphanumeric characters
        .split("-mp3"); // removes mp3 extension from file name
    const newFilename = `${date}-${randomString}-${cleanFileName}`;
    return newFilename.substring(0, 60);
}

// Setup Env Variable, e.g: process.env.SECRET_ACCESS_KEY
// Setup Env Variable, e.g: process.env.ACCESS_KEY_ID
aws.config.update({
    accessKeyId: aws.config.credentials.accessKeyId,
    secretAccessKey: aws.config.credentials.secretAccessKey,
    region: "us-west-1",
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "feedback-loft-audio",
        acl: "public-read",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, formatFilename(file.originalname));
        },
    }),
});

module.exports = upload;
