const sharp = require("sharp");

async function preprocessImage(inputPath) {

    const outputPath =
        inputPath.replace(".", "-processed.");

    await sharp(inputPath)
        .grayscale()
        .sharpen()
        .toFile(outputPath);

    return outputPath;
}

module.exports = {
    preprocessImage
};