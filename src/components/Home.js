import React from 'react'
import 'antd/dist/antd.css';
import { PageHeader, Spin, Button } from 'antd';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import Contrat from '../documents/Contrat';

export default function Home() {
    return (
        <div>
        <PageHeader
        style={{
          border: '4px solid rgb(235, 237, 240)',
        }}
        title="PDF Generator"
        subTitle="Made by Qallidi"
      />
      <br />
      <PDFDownloadLink document = { <Contrat /> } fileName = "MyContrat.pdf" >
          {({ loading }) => (loading ? <Spin size="large" /> :   
            <Button type="primary" icon="download">
                Telecharger le PDF
            </Button>
    )}
      </PDFDownloadLink>
      <br />
      <br />
      <PDFViewer file style={{ width: '804px', height: '604px'}}>
        <Contrat />
      </PDFViewer>

      <br />
      </div>
    );
}




