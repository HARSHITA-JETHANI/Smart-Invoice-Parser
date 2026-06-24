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

        <div style={{padding: "10px"}}>

            <label style={{ 
                backgroundColor: "#1e293b", 
                color: "white", 
                padding: "10px 15px", 
                borderRadius: "6px", 
                cursor: "pointer", 
                fontWeight: "bold" 
            }}>
                Select Invoice Document
                
                
                <input
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={handleFileChange}
                    style={{ display: "none" }} 
                />
            </label>

            <button
                onClick={handleUploadClick}
                style={{backgroundColor: "#F0B7B3", borderRadius:"6px", cursor: "pointer", padding: "10px", fontWeight: "bold", margin: "10px"}}
            >
                Upload Invoice
            </button>

        </div>

    );

}

export default UploadForm;