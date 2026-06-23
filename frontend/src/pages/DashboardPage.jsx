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
    
        <>

            <Navbar />

            <h1>Dashboard</h1>

            <div>

                <UploadForm onUpload={handleUpload}/>

            </div>

            <hr />

            <div style={{display: "flex",gap: "20px"}}>

                <DocumentViewer file={selectedFile}/>

                <ExtractedDataCard invoiceData={invoiceData}/>

            </div>

        </>

    );
}


export default DashboardPage;