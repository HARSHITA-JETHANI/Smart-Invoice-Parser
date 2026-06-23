import { useState } from "react";

function UploadForm({ onUpload }) {

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {

        setFile(event.target.files[0]);

    };

    const handleUploadClick = () => {

        onUpload(file);

    };

    return (

        <div>

            <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                onChange={handleFileChange}
            />

            <button
                onClick={handleUploadClick}
            >
                Upload Invoice
            </button>

        </div>

    );

}

export default UploadForm;