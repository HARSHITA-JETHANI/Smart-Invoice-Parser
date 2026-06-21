const express = require("express");
const upload = require("../middleware/upload.middleware");
const {extractTextFromPDF} = require("../services/pdf.service");
const {classifyPDF} = require("../services/classifier.service");
const {classifyDocument} = require("../services/documentClassifier.service");
const {extractTextFromImage} = require("../services/ocr.service");
const {preprocessImage} = require("../services/imagePreprocessor.service");

const router = express.Router();

router.post(
    "/",
    upload.single("invoice"),
    async (req, res, next) => {

        try {

            const documentType =
                classifyDocument(req.file);

            if (documentType === "image") {

                const processedImagePath =
                    await preprocessImage(req.file.path);

                const extractedText =
                    await extractTextFromImage(processedImagePath);

                return res.json({
                    success: true,
                    filename: req.file.originalname,
                    documentType,
                    extractedText
                });

            }

            const extractedText =
                await extractTextFromPDF(req.file.path);

            const classification =
                classifyPDF(extractedText);

            res.json({
                success: true,
                filename: req.file.originalname,
                documentType,
                classification,
                extractedText
            });

        } catch (error) {

            next(error);

        }

    }
);

module.exports = router;