import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  height: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr 1fr;;
  }
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr;
  }
`
const Card = styled.li`
  transition: background 0.2s;
  align-self: center;
  justify-self: center
  width: 100%;
  padding: 1rem 0;
  a {
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 100%;
    }
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 50%;
  }
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    width: 50%;
  }

`
const Title = styled.h2`
  font-size: ${props => (props.small ? '.5em' : '1em')};
  font-weight: 600;
  text-transform: uppercase;
  margin: 1rem 1rem 0.5rem 1rem;
  text-align: center;
`


const Modules = props => {
  return (
    <List>
      {props.content.map((content, index) => (
        <Card key={index}>
        {content.__typename == 'ContentfulPost' && (
          <a href={content.url}>
          <Img sizes={content.heroImage.sizes} />
          <Title>{content.text}</Title>
          </a>
        )}
        </Card>
         ))}
    </List>
  )
}

export default Modules