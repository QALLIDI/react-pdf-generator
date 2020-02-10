import React from 'react'
import { Document, Font, Text } from '@react-pdf/renderer'
import styled from '@react-pdf/styled-components'

const Body = styled.Page`
  padding-top: 35px;
  padding-bottom: 65px;
  padding-right: 35px;
  padding-left: 35px;
`;

const Header = styled.Text`
  color: black;
  font-size: 12px;
  text-align: left;
  margin-bottom: 20px;
`;

const Adresse = styled.Text`
  color: black;
  font-size: 10px;
  text-align: left;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  font-family: 'Oswald';
`;

const Subtitle = styled.Text`
  margin: 12px;
  font-size: 12px;
  font-family: 'Times-Roman';
  margin-top: 70px;
`;

const Description = styled.Text`
  font-size: 10px;
  text-align: right;
`;

const Paragraph = styled.Text`
  margin: 12px;
  font-size: 14px;
  text-align: justify;
  font-family: 'Times-Roman';
`;

const Picture = styled.Image`
  margin: 15px 10px;
`;

const Footer = styled.Text`
  left: 0px;
  right: 0px;
  color: grey;
  bottom: 30px;
  font-size: 12px;
  position: absolute;
  text-align: center;
`;

Font.register(
  'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  { family: 'Oswald' },
);

const Contrat = (props) => (
  <Document>
    <Body wrap>
      <Header fixed>
      Proposition de financement
      </Header>
      {/* <Title>Don Quijote de la Mancha</Title>
      <Author>Miguel de Cervantes</Author>
      <Picture src="/static/images/quijote1.jpg" /> */}
      <Description>
        Référence dossier : <Text>{props.reference}</Text>
      </Description>
      <Description>
        Date de création dossier : <Text>{props.date}</Text>
      </Description>
      <Subtitle>
      Nous vous remercions d’avoir choisi la banque populaire pour votre projet
      </Subtitle>
      <Adresse fixed>
        <Text>101, boulevard Mohamed Zerktouni Casablanca-Tél : 05 22 20 25 33 / 05 22 22 41 11.</Text>
      </Adresse>
      <Footer render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Body>
  </Document>
);

export default Contrat;