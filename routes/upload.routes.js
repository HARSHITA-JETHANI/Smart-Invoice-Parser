const express = require("express");
const upload = require("../middleware/upload.middleware");
const {extractTextFromPDF} = require("../services/pdf.service");

const router = express.Router();

router.post(
    "/",
    upload.single("invoice"),
    async (req, res, next) => {

        try {

            const extractedText =
                await extractTextFromPDF(req.file.path);

            res.json({
                success: true,
                filename: req.file.originalname,
                extractedText
            });

        } catch (error) {

            next(error);

        }

    }
);

module.exports = router;