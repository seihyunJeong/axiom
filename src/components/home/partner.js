import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../divider'
import { mediaQuery } from '../../utils/style'
import { useStaticQuery, graphql } from 'gatsby'

const Container = styled.div`
  grid-column: span 2;

  ${mediaQuery.lessThan('medium')`
    grid-column: 1;
  `}
`

const Content = styled.div`
  padding: 2px 0;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;

  a {
    text-decoration: none;
  }
`

const Item = styled.div`
  padding-right: 48px;
  margin: 18px 0;

  ${mediaQuery.lessThan('medium')`
    padding-right: 32px;
    margin: 16px 0;
  `}
`

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Name = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.35);
  font-weight: 500;
`

const Logo = styled.img`
  height: 120px;
  width: auto;
  display: block;
  margin-bottom: 10px;

  ${mediaQuery.lessThan('medium')`
    margin-bottom: 6px;
    height: 120px;
  `}
`

const Partner = () => {
  const {
    allPartnerJson: { nodes }
  } = useStaticQuery(graphql`
    query {
      allPartnerJson {
        nodes {
          id
          name
          link
          category
        }
      }
    }
  `)

  const getNameAndField = (name) => {
    return name.replace(/\(.+\)/, (match, p1) => {
      return ''
    }).trim()
  }

  const effectIn = (name) => {
    console.log('effect in')
    console.log(name)
    this.src
  }

  const effectOut = (name) => {
    console.log('effect out')
    console.log(name)
  }
/*
                  <Name>
                    {getNameAndField(node.name)}
                  </Name>
                  <Name>
                    ({node.category})
                  </Name>
                <Logo src={`/partner/${node.id}.png`} onMouseOver={`src=/partner/${node.id}_hover.png`} onMouseOut={`src=/partner/${node.id}.png`}/>   
                <Logo src={`/partner/${node.id}.png`} onMouseOver={() => { src=`/partner/${node.id}_hover.png`; console.log('mouse over'); }} onMouseOut={() => { src=`/partner/${node.id}.png`; console.log("mouse out");}}/>
                onMouseOut={() => { this.src=`/partner/${node.id}.png`; console.log("mouse out");}
                onMouseOver={e => { console.log(e); console.log(`/partner/${node.id}_hover.png`); console.log('mouse over'); }} 
*/
  return (
    <Container>
      <Content>
        <SectionTitle>
          Portfolio
        </SectionTitle>
        <List>
          {nodes.map(node => (
            <Item>
              <a key={node.id} href={node.link} target="_blank" rel="noopener noreferrer">
                <ItemContent>
                <Logo src={`/partner/${node.id}.png`} 
                          onMouseOver={e => (e.target.src=`/partner/${node.id}_hover.png`)}
                          onMouseOut={e => (e.target.src=`/partner/${node.id}.png`)}
                />
               
                </ItemContent>
              </a>
            </Item>
          ))}
        </List>
      </Content>
    </Container>
  )
}

export default Partner
