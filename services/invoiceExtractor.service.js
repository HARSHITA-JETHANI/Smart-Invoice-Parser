function extractInvoiceNumber(text) {

    const invoiceRegex =
        /Invoice\s*No\.?\s*([\w-]+)/i;

    const match =
        text.match(invoiceRegex);

    return match
        ? match[1]
        : null;
}

module.exports = {
    extractInvoiceNumber
};