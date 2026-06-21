const fs = require("fs");
const pdfParse = require("pdf-parse");
console.log(pdfParse.PDFParse);

async function extractTextFromPDF(filePath) {

    const pdfBuffer = fs.readFileSync(filePath);

    const data = await pdfParse(pdfBuffer);

    return data.text;
}

module.exports = {
    extractTextFromPDF
};