const express = require("express");

const invoiceRoutes = require("./routes/invoice.routes");
const logger = require("./middleware/logger.middleware");
const uploadRoutes = require("./routes/upload.routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

const PORT = 3000;

app.use(logger);

app.use("/api/invoices", invoiceRoutes);

app.use("/api/upload", uploadRoutes);

app.use(errorHandler);





app.get("/", (req, res) => {
    res.send("Smart Invoice Parser Backend Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});