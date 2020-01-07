import React from 'react';
import styled, { css } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { SectionTitle } from '../divider';

const Container = styled.div``;

const Person = styled.div`
  color: var(--primary);
  margin-top: 30px;

  & p {
    margin-top: 0px;
  }

  & strong {
    &:after {
      content: ' ';
    }
  }
`;

const PersonLabel = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  color: #3a69c1;
  font-weight: 500;
  margin-bottom: 2px;
  ${({ isAdvisor }) =>
    isAdvisor &&
    css`
      color: #f16b35;
    `}
`;

const People = () => {
  const {
    allPeopleJson: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allPeopleJson {
          nodes {
            id
            name
            desc
          }
        }
      }
    `
  );

  const renderLabel = i => {
    let text = 'Partner';
    let isAdvisor = false;
    // if (i === nodes.length - 1) {
    //   text = 'Advisor';
    //   isAdvisor = true;
    // } else {
    //   text = 'Partner';
    // }

    return <PersonLabel isAdvisor={isAdvisor}>{text}</PersonLabel>;
  };

  return (
    <Container>
      <SectionTitle>People</SectionTitle>
      {nodes.map((node, i) => (
        <Person key={node.id}>
          {renderLabel(i)}
          <p>
            <strong>{node.name}</strong>
            {node.desc}
          </p>
        </Person>
      ))}
    </Container>
  );
};

export default People;
