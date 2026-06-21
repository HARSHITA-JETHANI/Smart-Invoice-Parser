function classifyDocument(file) {

    if (file.mimetype === "application/pdf") {
        return "pdf";
    }

    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg"
    ) {
        return "image";
    }

    return "unknown";
}

module.exports = {
    classifyDocument
};