// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// // import Particle from "../../components/particle";
// // import pdf from "../../assets/KARTHIYAYINI T G_ResumeUpdatedNew (1).pdf";
// import pdf from "../../assets/Karthiyayini_ResumeNew (2).pdf";

// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// // import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// // Add this instead:
// import "react-pdf/dist/Page/AnnotationLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";
// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// // Solution 1: Use unpkg CDN instead
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// function ResumeNew() {
//     const [width, setWidth] = useState(1200);

//     useEffect(() => {
//         setWidth(window.innerWidth);
//     }, []);

//     return (
//         <div>
//             <Container fluid className="resume-section">
//                 {/* <Particle /> */}
//                 <Row style={{ justifyContent: "center", position: "relative" }}>
//                     <Button
//                         variant="primary"
//                         href={pdf}
//                         target="_blank"
//                         style={{ maxWidth: "250px" }}
//                     >
//                         <AiOutlineDownload />
//                         &nbsp;Download CV
//                     </Button>
//                 </Row>

//                 <Row className="resume">
//                     <Document file={pdf} className="d-flex justify-content-center">
//                         <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />

//                         <iframe
//                             src="../../assets/KARTHIYAYINI T G_ResumeUpdatedNew (1).pdf"
//                             width="100%"
//                             height="600px"
//                             title="Resume"
//                             style={{ border: 'none' }}
//                         />
//                     </Document>

//                     {/* <iframe
//                         src="../../assets/KARTHIYAYINI T G_ResumeUpdatedNew (1).pdf"
//                         width="100%"
//                         height="600px"
//                         title="Resume"
//                         style={{ border: 'none' }}
//                     /> */}
//                 </Row>

//                 <Row style={{ justifyContent: "center", position: "relative" }}>
//                     <Button
//                         variant="primary"
//                         href={pdf}
//                         target="_blank"
//                         style={{ maxWidth: "250px" }}
//                     >
//                         <AiOutlineDownload />
//                         &nbsp;Download CV
//                     </Button>
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default ResumeNew;


import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../../components/particle";
// import pdf from "../../assets/KARTHIYAYINI T G_ResumeUpdatedNew (1).pdf";
import pdf from "../../assets/Karthiyayini_ResumeNew (2).pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Use the locally-copied worker file (matches your installed pdfjs-dist version)
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

function ResumeNew() {
    const [width, setWidth] = useState(1200);
    const [numPages, setNumPages] = useState(null);
    const [pdfError, setPdfError] = useState(null);

    useEffect(() => {
        setWidth(window.innerWidth);

        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPdfError(null);
    };

    const onDocumentLoadError = (error) => {
        console.error("PDF load error:", error);
        setPdfError(error.message);
    };

    return (
        <div>
            <Container fluid className="resume-section">
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <Document
                        file={pdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        loading={<p style={{ color: "white", textAlign: "center" }}>Loading resume...</p>}
                        error={<p style={{ color: "white", textAlign: "center" }}>Failed to load resume.</p>}
                        className="d-flex flex-column align-items-center"
                    >
                        {numPages &&
                            Array.from({ length: numPages }, (_, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                    scale={width > 786 ? 1.7 : 0.6}
                                />
                            ))}
                    </Document>

                    {pdfError && (
                        <p style={{ color: "red", textAlign: "center" }}>
                            Preview unavailable: {pdfError}
                        </p>
                    )}
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;