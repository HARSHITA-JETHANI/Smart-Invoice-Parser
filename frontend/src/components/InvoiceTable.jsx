function InvoiceTable({invoices, onDelete, onEdit}) {

    return (

        <table className="invoice-table">

            <thead>

                <tr>

                    <th>Vendor</th>
                    <th>Invoice Number</th>
                    <th>Total Amount</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {invoices.map((invoice) => (

                    <tr key={invoice.id}>

                        <td>
                            {invoice.vendor_name}
                        </td>

                        <td>
                            {invoice.invoice_number}
                        </td>

                        <td>
                            {invoice.total_amount}
                        </td>

                        <td>

                            

                            <button onClick={() => onDelete(invoice.id)}>
                                Delete
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default InvoiceTable;