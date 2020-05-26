const aws = require("aws-sdk");
// const config = require("./config.json");

(async function () {
    try {
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: "AKIAJBML5VKTFHFGRLTQ",
            // Setup Env Variable, e.g: process.env.SECRET_ACCESS_KEY
            secretAccessKey: "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",
            // Setup Env Variable, e.g: process.env.ACCESS_KEY_ID
            region: "us-west-1",
        });

        const s3 = new aws.S3();

        const upload = multer({
            storage: multerS3({
                s3: s3,
                bucket: "medium-test",
                acl: "public-read",
                metadata: function (req, file, cb) {
                    cb(null, { fieldName: file.fieldname });
                },
                key: function (req, file, cb) {
                    cb(null, Date.now().toString());
                },
            }),
        });

        module.exports = upload;

        const response = await s3
            .listObjectsV2({
                Bucket: "feedback-loft-audio",
            })
            .promise();

        console.log(response);
    } catch (e) {
        console.log("our error", e);
    }

    debugger;
})();
