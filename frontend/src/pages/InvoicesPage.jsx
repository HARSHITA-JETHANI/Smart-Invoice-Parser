import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import InvoiceTable from "../components/InvoiceTable";

function InvoicesPage() {
    const [invoices, setInvoices] = useState([]);
    

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

    return (
        <div>

            <Navbar />

            <h1>Invoice History</h1>

            <InvoiceTable
                invoices={invoices}
                onDelete={handleDelete}
            />

        </div>
    );

}

export default InvoicesPage;