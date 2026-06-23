function ExtractedDataCard({invoiceData}) {

    if (!invoiceData) {

        return (

            <div>

                <h2>Extracted Data</h2>

                <p>
                    Upload an invoice
                </p>

            </div>

        );

    }

    return (

        <div>

            <h2>Extracted Data</h2>

            <p>
                Vendor:
                {invoiceData.vendorName}
            </p>

            <p>
                Customer:
                {invoiceData.customerName}
            </p>

            <p>
                Invoice Number:
                {invoiceData.invoiceNumber}
            </p>

            <p>
                Date:
                {invoiceData.invoiceDate}
            </p>

            <p>
                Total:
                {invoiceData.totalAmount}
            </p>

            <p>
                Tax:
                {invoiceData.taxAmount}
            </p>

            <p>
                Currency:
                {invoiceData.currency}
            </p>

        </div>

    );

}

export default ExtractedDataCard;