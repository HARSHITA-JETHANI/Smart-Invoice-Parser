function DocumentViewer({ file }) {

    if (!file) {

        return (
            <div>
                <h2>
                    Original Document
                </h2>

                <p>
                    No document uploaded
                </p>
            </div>
        );
    }

    const fileURL =
        URL.createObjectURL(file);

    if (
        file.type === "application/pdf" || file.type === "image/jpeg"
    ) {

        return (

            <div>

                <h2>
                    Original Document
                </h2>

                <iframe
                    src={fileURL}
                    width="500"
                    height="600"
                    title="PDF Viewer"
                />

            </div>

        );

    }

    return (

        <div>

            <h2>
                Original Document
            </h2>

            <img
                src={fileURL} alt="Invoice" width="500"
            />

        </div>

    );

}

export default DocumentViewer;