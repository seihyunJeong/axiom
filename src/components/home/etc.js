import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { SectionTitle } from '../divider';
import { mediaQuery } from '../../utils/style';

const Container = styled.div`
  display: none;
  &[data-from-about='true'] {
    display: block;
  }

  ${mediaQuery.lessThan('medium')`
    display: block;
    &[data-from-about=true] {
      display: none;
    }
  `}
`;

const Section = styled.div`
  margin-top: 40px;
`;

const EmailP = styled.p`
  a {
    margin-left: 4px;
    color: var(--primary);
    text-decoration: underline;
  }
`;

const Etc = ({ fromAbout }) => {
  const { dataJson: about } = useStaticQuery(
    graphql`
      query {
        dataJson {
          contact {
            email
          }
          address {
            name
            detail
          }
        }
      }
    `
  );

  return (
    <Container data-from-about={fromAbout}>
      <Section>
        <SectionTitle>Address</SectionTitle>
        <p>
          {about.address.name}
          <br />
          <span dangerouslySetInnerHTML={{ __html: about.address.detail }} />
        </p>
      </Section>
      <Section>
        <SectionTitle>Contact</SectionTitle>
        <EmailP>
          E-mail
          <a href={`mailto:${about.contact.email}`}>{about.contact.email}</a>
        </EmailP>
      </Section>
    </Container>
  );
};

export default Etc;
