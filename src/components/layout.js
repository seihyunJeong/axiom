import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './header';
import './layout.css';
import { mediaQuery } from '../utils/style';

const Container = styled.div`
  max-width: 895px;
  margin: 0 auto;
  --pad-x: 16px;
  padding: 0 var(--pad-x);

  ${mediaQuery.lessThan('medium')`
    --pad-x: 24px;
    width: 100%;
    max-width: 594px;
  `}

  ${mediaQuery.lessThan('small')`
    --pad-x: 18px;
  `}
`;

const Footer = styled.footer`
  font-size: 13px;
  color: #dedede;
  text-align: center;
  padding: 24px 0;
  color: #727c88;
`;

const GlobalStyle = createGlobalStyle`
  p {
    font-size: 14px;
    line-height: 1.68;
    max-width: 408px;

    ${mediaQuery.lessThan('medium')`
      font-size: 16px;
    `}
  }

`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Container>
      <Header />
      <main>{children}</main>
      <Footer>
        © {new Date().getFullYear()}, Axiom Associates Korea, Inc.
      </Footer>
    </Container>
  </>
);

export default Layout;
