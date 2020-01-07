import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import People from '../components/home/people';
import About from '../components/home/about';
import { mediaQuery } from '../utils/style';
import Etc from '../components/home/etc';

const Contents = styled.div`
  grid-gap: 80px;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  display: grid;
  margin-top: 48px;

  ${mediaQuery.lessThan('medium')`
    grid-auto-flow: row;
    grid-gap: 40px;
    margin-top: 24px;
  `}
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Axiom Associates" />
    <Contents>
      <About />
      <People />
      <Etc />
    </Contents>
  </Layout>
);

export default IndexPage;
