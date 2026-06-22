const db = require("../database/database");

function saveInvoice(invoiceData) {

    return new Promise((resolve, reject) => {

        db.run(
            `
            INSERT INTO invoices (
                vendor_name,
                customer_name,
                invoice_number,
                invoice_date,
                total_amount,
                tax_amount,
                currency
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
            `,
            [
                invoiceData.vendorName,
                invoiceData.customerName,
                invoiceData.invoiceNumber,
                invoiceData.invoiceDate,
                invoiceData.totalAmount,
                invoiceData.taxAmount,
                invoiceData.currency
            ],
            function (err) {

                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }

            }
        );

    });

}

module.exports = {
    saveInvoice
};