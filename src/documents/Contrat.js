import React from 'react'
import { Document, Text } from '@react-pdf/renderer'
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
  font-size: 14px;
  text-align: left;
  font-family: 'Times-Roman';
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


const Footer = styled.Text`
  left: 0px;
  right: 0px;
  color: grey;
  bottom: 30px;
  font-size: 12px;
  position: absolute;
  text-align: center;
`;

const Contrat = (props) => (
  <Document>
    <Body wrap>
      <Header fixed>
      Proposition de financement
      </Header>
      <Description>
        Référence dossier : <Text>{props.reference}</Text>
      </Description>
      <Description>
        Date de création dossier : <Text>{props.date}</Text>
      </Description>
      <Subtitle>
      Nous vous remercions d’avoir choisi la banque populaire pour votre projet
      </Subtitle>
      <Title>
      VISION​​​
      </Title>
      <Paragraph>
      Groupe composé de la Banque Centrale Populaire et des Banques Populaires Régionales, le Crédit Populaire du Maroc accompagne toute entreprise, moyenne ou petite, artisanale, industrielle ou de service, par une offre de financement à court, moyen ou long termes.
      Fidèle à son esprit d’entreprise, le Crédit Populaire du Maroc s’est inspiré de l'ensemble des besoins de sa clientèle pour développer une gamme complète de produits et services. 
      Quatre orientations stratégiques majeure​s g​uident ses activités : ​
      </Paragraph>
      <Title>
      LA CONSOLIDATION DES POSITIONS ACQUISES
      </Title>
      <Paragraph>
      Le Groupe Banque Populaire accélère le développement de ses activités d’intermédiation, de marché, mais aussi de banque de détail. Avec l’ouverture d’une centaine d’agences chaque année, le Groupe dispose du plus large réseau bancaire pour appuyer sa stratégie de croissance. Ce dispositif a permis d’améliorer de façon significative la collecte des ressources et les crédits alloués aux entreprises, soutenu par la nouvelle approche de la Banque Populaire dans ses relations et ses offres dédiées à la clientèle Entreprises.​ 
      Par ailleurs, le Groupe augmente sensiblement ses parts de marché en matière des crédits immobiliers et de crédits à la consommation, tous les deux en constante hausse.
      </Paragraph>
      <Title>
      LA BANQUE CITOYENNE
      </Title>
      <Paragraph>
      Partenaires financiers de premier plan, les Banques Populaires Régionales du Groupe participent à l’essor de leur région en mobilisant et en utilisant l'épargne au niveau local, au bénéfice des acteurs économiques et sociaux. Elles agissent également pour la bancarisation de la population, en s’appuyant sur la politique de proximité du Groupe, la souplesse dans les ouvertures de comptes et un large réseau de distribution. Le Groupe Banque Populaire est en effet le 1er réseau bancaire du pays avec 1 443 agences, 3 461​​ points de distribution additionnels et plus de 1 911 guichets automatiques à travers tout le Royaume.
      </Paragraph>
      <Adresse fixed>
        <Text>101, boulevard Mohamed Zerktouni Casablanca - Tél : 05 22 20 25 33 / 05 22 22 41 11.</Text>
      </Adresse>
      <Footer render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Body>
  </Document>
);

export default Contrat;