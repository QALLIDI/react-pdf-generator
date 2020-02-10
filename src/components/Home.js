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
        avatar={{ src:  'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
        extra={[
          <Button key="3">About Us</Button>,
          <Button key="2">Contact Us</Button>,
          <Button key="1" type="danger" icon="question-circle">
            Help
          </Button>,
        ]}
      />
      <br />
      <PDFDownloadLink document = { <Contrat date = '10 févr. 2020' reference = '3124310323_0' /> } fileName = "Proposition_commerciale.pdf" >
          {({ loading }) => (loading ? <Spin size="large" tip="Loading..."/> :   
            <Button type="primary" icon="download" style = {{ left : '634px' }}>
                Telecharger le PDF
            </Button>
    )}
      </PDFDownloadLink>
      <br />
      <br />
      <PDFViewer file="true" style={{ width: '804px', height: '604px'}}>
        <Contrat date = '10 févr. 2020' reference = '3124310323_0' />
      </PDFViewer>
      <br />
  </div>
    );
}




