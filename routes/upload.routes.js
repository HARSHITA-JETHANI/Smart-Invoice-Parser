const express = require("express");
const upload = require("../middleware/upload.middleware");
const {extractTextFromPDF} = require("../services/pdf.service");
const {classifyPDF} = require("../services/classifier.service");
const {classifyDocument} = require("../services/documentClassifier.service");
const {extractTextFromImage} = require("../services/ocr.service");

const router = express.Router();

router.post(
    "/",
    upload.single("invoice"),
    async (req, res, next) => {

        try {

            const documentType =
                classifyDocument(req.file);

            if (documentType === "image") {

                const extractedText =
                    await extractTextFromImage(req.file.path);

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