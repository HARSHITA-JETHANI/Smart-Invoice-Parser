require("dotenv").config();

const { extractInvoiceData } = require("./services/llmExtractor.service");

async function test() {
    const result = await extractInvoiceData(`
        Invoice Number: INV-123

        Vendor: ABC Pvt Ltd

        Date: 20-06-2025

        Total Amount: 5000 INR

        Tax Amount: 900 INR
    `);

    console.log(result);
}

test();