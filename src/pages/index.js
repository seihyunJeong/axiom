import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import People from '../components/home/people';
import About from '../components/home/about';
import { mediaQuery } from '../utils/style';
import Etc from '../components/home/etc';
import Partner from '../components/home/partner';

const Contents = styled.div`
  grid-gap: 40px 80px;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  margin-top: 48px;

  ${mediaQuery.lessThan('medium')`
    grid-template-columns: 1fr;
    grid-gap: 20px 40px;
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
      <Partner />
    </Contents>
  </Layout>
);

export default IndexPage;
