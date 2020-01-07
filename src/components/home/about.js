import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { mediaQuery } from '../../utils/style';
import Etc from './etc';

const Container = styled.div``;

const Headline = styled.h1`
  font-size: 48px;
  letter-spacing: -1px;
  font-family: Playfair Display SC, sans-serif;
  font-weight: 400;

  ${mediaQuery.lessThan('small')`
    font-size: 40px;
    text-align: center;
    letter-spacing: -0.46px;
  `}
`;

const Contents = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const About = () => {
  const { dataJson: about } = useStaticQuery(
    graphql`
      query {
        dataJson {
          headline
          contents
        }
      }
    `
  );

  return (
    <Container>
      <Headline>{about.headline}</Headline>
      <Contents>
        {about.contents.map((text, i) => {
          return <p key={i}>{text}</p>;
        })}
      </Contents>
      <Etc fromAbout />
    </Container>
  );
};

export default About;
