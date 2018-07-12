import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import SEO from '../components/SEO'
import Modules from '../components/Modules'

const Index = ({ data }) => {
  const pages = data.allContentfulPage.edges
  const posts = data.contentfulPost

  const GridContainer = styled.section`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: 'Hero Hero Hero Hero' 'Buttons Buttons TextMeTheApp TextMeTheApp' 'Footer Footer Footer Footer';
  `
  const Hero = styled.div`
    grid-area: Hero;
    height: 400px;
    margin-top: 75px;
    position: relative;
    overflow: hidden;
    .gatsby-image-outer-wrapper,
    .gatsby-image-wrapper {
      position: static !important;
    }
  `
  const Cover = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
  `
  const Buttons = styled.div`
    grid-area: Buttons;
    margin: 1rem;
  `
  const TextMeTheApp = styled.div`
    grid-area: TextMeTheApp;
    text-align: center;
    background: #dedede;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    div > form {
      text-align: center;
      input {
        padding: 1rem;
        margin: .5rem;
        background: #ffffff;
        width: 330px;
      }
      input[type=submit] {
        color: #fff;
        background: #0A253E;
        font-size: 1rem;
      }
    }
  `
  const PageTitle = styled.h1`
    font-size: ${props => (props.small ? '2em' : '3em')};
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;
    margin: 0;
    line-height: 1.2;
  `

  const TextMeTheAppTitle = styled.h3`
    font-size: ${props => (props.small ? '.5em' : '1em')};
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;
    margin: 0 0 .5rem;
    line-height: 1.2;
  `

  return (
    <div>
      <SEO />
      <GridContainer>
        <Hero>
          <Cover>
          {pages.map(({ node: page }) => (
            <Img key={page.id} sizes={page.hero.sizes} />
            ))}
          </Cover>
        </Hero>
        <Buttons>
        {pages.map(({ node: page }) => (

            <Modules key={page.id} content={page.content} />

        ))}
        </Buttons>
        <TextMeTheApp>
          Send SMS
          <div
            dangerouslySetInnerHTML={{
              __html: `        <form onsubmit="sendSMS(this); return false;">
              <input id="phone" name="phone" type="tel" placeholder="(650) 123-4567" />
              <br/>
              <input type="submit"/>
          </form>`,
            }}
          />
        </TextMeTheApp>
      </GridContainer>
    </div>
  )
}

export const query = graphql`
query bur {
allContentfulPage(
  filter: {slug: {eq: "bur"}}
){
  edges {
    node {
      id
      title
      slug
      hero {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      content {
        __typename
        ... on ContentfulPost {
          title
          id
          slug
          url
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
      }
    }
  }
  }
  }
  `

  export default Index
