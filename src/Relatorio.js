import React from 'react' ;
import{ PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Documento from './Documento';


const Relatorio =() => ( 
    <>
        <PDFDownloadLink document={<Documento/>} fileName="relatorio.pdf">
            Download relatorio.pdf
        </PDFDownloadLink>
        <PDFViewer with='100%' height='1000px'>
            <Documento/>
        </PDFViewer>
    </>
)

export default Relatorio