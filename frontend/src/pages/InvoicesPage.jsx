import "../InvoicesPage.css";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import InvoiceTable from "../components/InvoiceTable";
import EditInvoiceForm from "../components/EditInvoiceForm";

function InvoicesPage() {
    const [invoices, setInvoices] = useState([]);
    const [editingInvoice, setEditingInvoice] =useState(null);

    const fetchInvoices = async () => {

        try {

            const response = await api.get("/invoices");

            setInvoices(response.data);

        } catch (error) {

            console.error(error);

        } 

    };

    useEffect(() => {

        fetchInvoices();

    }, []);

    const handleDelete = async (id) => {
        const confirmed =
            window.confirm(
                "Delete this invoice?"
            );

        if (!confirmed) return;

        try {

            await api.delete(`/invoices/${id}`);

            fetchInvoices();

        } catch (error) {

            console.error(error);

        }

    };

    const handleEdit = (invoice) => {

        setEditingInvoice(invoice);
    };

    const handleUpdate = async (id,updatedInvoice) => {
        try {
            await api.put(
                `/invoices/${id}`,
                updatedInvoice
            );

            setEditingInvoice(null);
            fetchInvoices();

        } catch (error) {
            console.error(error);
        }

    };

    return (
    <div>

        <Navbar />

        <div className="invoices-page">

            <h1 className="invoices-title">Invoice History</h1>

            <div className="table-container">

                <InvoiceTable
                    invoices={invoices}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />

                {
                    editingInvoice && (

                        <EditInvoiceForm
                            invoice={editingInvoice}
                        />

                    )
                }
            </div>
        </div>

    </div>
);
}
export default InvoicesPage;