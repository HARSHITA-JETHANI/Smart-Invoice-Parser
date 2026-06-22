const express = require("express");

const {getAllInvoices,getInvoiceById, updateInvoice, deleteInvoice} = require("../services/invoice.service");

const router = express.Router();

router.get("/", async (req, res, next) => {

    try {

        const invoices =
            await getAllInvoices();

        res.json(invoices);

    } catch (error) {

        next(error);

    }

});

router.get("/:id", async (req, res, next) => {

    try {

        const invoice =
            await getInvoiceById(req.params.id);

        if (!invoice) {

            return res.status(404).json({
                success: false,
                message: "Invoice not found"
            });

        }

        res.json(invoice);

    } catch (error) {

        next(error);

    }

});

router.put("/:id", async (req, res, next) => {

    try {

        const updatedRows =
            await updateInvoice(
                req.params.id,
                req.body
            );

        if(updatedRows === 0) {

            return res.status(404).json({
                success: false,
                message: "Invoice not found"
            });

        }

        res.json({
            success: true,
            message: "Invoice updated"
        });

    } catch(error) {

        next(error);

    }

});

router.delete("/:id", async (req, res, next) => {

    try {

        const deletedRows =
            await deleteInvoice(req.params.id);

        if(deletedRows === 0) {

            return res.status(404).json({
                success: false,
                message: "Invoice not found"
            });

        }

        res.json({
            success: true,
            message: "Invoice deleted"
        });

    } catch(error) {

        next(error);

    }

});

module.exports = router;