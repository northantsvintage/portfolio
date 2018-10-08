import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const Contact = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contact</Header>
    <Container type="text">
      <h1>Contact me through <a href="https://www.linkedin.com/in/ida-p" target="_blank">LinkedIn</a>!</h1>
    </Container>
  </Layout>
);

export default Contact;
