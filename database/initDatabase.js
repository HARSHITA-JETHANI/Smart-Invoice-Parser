const db = require("./database");

db.run(`
CREATE TABLE IF NOT EXISTS invoices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vendor_name TEXT,
    customer_name TEXT,
    invoice_number TEXT,
    invoice_date TEXT,
    total_amount REAL,
    tax_amount REAL,
    currency TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
`, (err) => {

    if (err) {
        console.error(err.message);
    } else {
        console.log("Invoices table created");
    }

});