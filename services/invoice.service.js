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

function getAllInvoices() {

    return new Promise((resolve, reject) => {

        db.all(
            "SELECT * FROM invoices ORDER BY id DESC",
            [],
            (err, rows) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }

            }
        );

    });

}

function getInvoiceById(id) {

    return new Promise((resolve, reject) => {

        db.get(
            "SELECT * FROM invoices WHERE id = ?",
            [id],
            (err, row) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }

            }
        );

    });

}

function updateInvoice(id, invoiceData) {

    return new Promise((resolve, reject) => {

        db.run(
            `
            UPDATE invoices
            SET
                vendor_name = ?,
                customer_name = ?,
                invoice_number = ?,
                invoice_date = ?,
                total_amount = ?,
                tax_amount = ?,
                currency = ?
            WHERE id = ?
            `,
            [
                invoiceData.vendor_name,
                invoiceData.customer_name,
                invoiceData.invoice_number,
                invoiceData.invoice_date,
                invoiceData.total_amount,
                invoiceData.tax_amount,
                invoiceData.currency,
                id
            ],
            function(err) {

                if(err) {
                    reject(err);
                } else {
                    resolve(this.changes);
                }

            }
        );

    });

}

function deleteInvoice(id) {

    return new Promise((resolve, reject) => {

        db.run(
            "DELETE FROM invoices WHERE id = ?",
            [id],
            function(err) {

                if(err) {
                    reject(err);
                } else {
                    resolve(this.changes);
                }

            }
        );

    });

}

module.exports = {
    saveInvoice, getAllInvoices, getInvoiceById, updateInvoice, deleteInvoice
};