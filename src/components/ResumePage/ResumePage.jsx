import React from 'react'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { Worker, pdfjs, Document, Page } from '@react-pdf-viewer/core'
import resumePdf from '../../images/LHuftonResumé.pdf' // Update the path based on your project structure

const ResumePage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
      >
        <div style={{ margin: '20px' }}>
          <Document file={resumePdf}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </Worker>
    </div>
  )
}

export default ResumePage
