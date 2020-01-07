import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import { mediaQuery } from '../utils/style';

const Container = styled.header`
  overflow: hidden;
  margin: 0 calc(-1 * var(--pad-x));
`;

const Border1 = styled.div`
  width: 100%;
  height: 3px;
  background-color: var(--primary);
`;
const Border2 = styled(Border1)`
  height: 1px;
  margin-top: 4px;
`;

const LogoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px 0;

  svg {
    fill: var(--primary);
    height: calc(35 / 159 * 100%);
  }
  ${mediaQuery.lessThan('medium')`
    svg {
      width: 120px;
    }
    padding: 16px 0;
  `}
`;

const Header = () => (
  <Container>
    <LogoBox>
      <Logo width={160} />
    </LogoBox>
    <Border1 />
    <Border2 />
  </Container>
);

export default Header;
