const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function extractInvoiceData(text) {

    const prompt = `
Extract invoice information.

Return ONLY valid JSON.

Fields:
- vendorName
- customerName
- invoiceNumber
- invoiceDate
- totalAmount
- taxAmount
- currency

Invoice Text:

${text}
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });

    const cleanedResponse = response.text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(cleanedResponse);
}

module.exports = {
    extractInvoiceData
};