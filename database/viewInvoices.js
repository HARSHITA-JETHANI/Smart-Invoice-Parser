const db = require("./database");

db.all(
    "SELECT * FROM invoices",
    [],
    (err, rows) => {

        if (err) {
            console.error(err.message);
            return;
        }

        console.table(rows);

    }
);