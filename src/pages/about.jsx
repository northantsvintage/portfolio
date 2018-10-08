import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

const About = () => (
  <Layout>
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About</Header>
    <Container type="text">
      <h1>Hi!</h1>
      <h2>I am Ida</h2>
      <h3>Front-End Web Developer from Northampton</h3>
      <p>I am passionate about building responsive, interactive, accessible and optimized websites with SEO in mind!</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/ida-p" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/northantsvintage">GitHub</a></li>
      </ul>
    </Container>
  </Layout>
);

export default About;
