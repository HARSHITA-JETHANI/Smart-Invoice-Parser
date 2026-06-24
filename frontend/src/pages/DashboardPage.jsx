import Navbar from "../components/Navbar";
import DocumentViewer from "../components/DocumentViewer";
import ExtractedDataCard from "../components/ExtractedDataCard";
import UploadForm from "../components/UploadForm";
import { useState } from "react";
import api from "../services/api";


function DashboardPage() {

    const [invoiceData, setInvoiceData] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleUpload = async (file) => {

        try {

            const formData =new FormData();

            formData.append(
                "invoice",
                file
            );

            setSelectedFile(file);

            const response =
                await api.post(
                    "/upload",
                    formData
                );

            setInvoiceData(response.data.invoiceData);

        } catch (error) {

            console.error(error);

        }

    };
    

    return (
    
        <div>

            <Navbar />

            <div style={{padding: "30px"}}>

            <h1>Dashboard</h1>

            <div>

                <UploadForm onUpload={handleUpload}/>

            </div>

            <hr />

            <div style={{display: "flex",gap: "20px", alignItems: "flex-start"}}>

                <div style={{background: "white", padding: "20px", borderRadius: "8px", width: "50%"}}> 
                    <DocumentViewer file={selectedFile}/>
                </div>

                <div style={{background: "white", padding: "20px", borderRadius: "8px", width: "50%"}}> 
                    <ExtractedDataCard invoiceData={invoiceData}/>
                </div>

                

            </div>
        </div>

        </div>

    );
}


export default DashboardPage;