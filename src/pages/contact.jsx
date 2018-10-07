import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const Contact = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contact</Header>
    <Container type="text">
      <h1>Contact me!</h1>
      <p>
        Here is my Resume <a href="./Ida-Resume.pdf">Resume</a>
      </p>
    </Container>
  </Layout>
);

export default Contact;
