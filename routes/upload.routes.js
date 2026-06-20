const express = require("express");
const upload = require("../middleware/upload.middleware");

const router = express.Router();

router.post(
    "/",
    upload.single("invoice"),
    (req, res) => {

        res.json({
            success: true,
            filename: req.file.originalname,
            storedAs: req.file.filename
        });

    }
);

module.exports = router;