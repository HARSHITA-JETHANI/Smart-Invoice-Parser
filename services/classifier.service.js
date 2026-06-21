function classifyPDF(text) {

    const cleanedText = text.trim();

    if (cleanedText.length > 50) {

        return {
            type: "digital",
            needsOCR: false
        };

    }

    return {
        type: "scanned",
        needsOCR: true
    };

}

module.exports = {
    classifyPDF
};