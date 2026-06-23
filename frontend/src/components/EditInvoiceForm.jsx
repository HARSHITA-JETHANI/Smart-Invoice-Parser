import { useState } from "react";


function EditInvoiceForm({invoice}) {
    const [formData, setFormData] = useState(invoice);

    return (

        <div>

            <h2>
                Edit Invoice
            </h2>

            <input
            value={formData.vendor_name}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    vendor_name: e.target.value
                })

            }
        />

        </div>

    );

}

export default EditInvoiceForm;