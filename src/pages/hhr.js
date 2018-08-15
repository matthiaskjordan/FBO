import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from '../components/SEO'
import Modules from '../components/Modules'
import PageTransition from 'gatsby-plugin-page-transitions';

const Index = ({ data }) => {
  const pages = data.allContentfulPage.edges

  const GridContainer = styled.section`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.25fr 1fr 1fr 1fr;
    font-family: 'FFKievitWebProLight', Helvetica, Verdana, sans-serif;
    text-align: center;
    h1 {
      font-size: ${props => (props.small ? '1.5rem' : '3rem')};
      padding: 0.25rem 0;
      font-family: 'FFKievitWebPro', Helvetica, Verdana, sans-serif;
    }
    h2 {
      font-size: 1.25rem;
      padding: 0.25rem 0;
      text-transform: uppercase;
      font-family: 'FFKievitWebProBold', Helvetica, Verdana, sans-serif;
    }
    p {
      font-size: 1.5rem;
      padding: 0.25rem 0;
      font-weight: thing;
      font-family: 'FFKievitWebProLight', Helvetica, Verdana, sans-serif;
    }
    @media screen and (max-width: 599px) {
      grid-template-areas: 'Banner Banner Banner Banner' 'Hero Hero Hero Hero' 'TextMeTheApp TextMeTheApp TextMeTheApp TextMeTheApp' 'Buttons Buttons Buttons Buttons' 'Footer Footer Footer Footer';
      grid-template-rows: 0.25fr 1fr 1fr;
    }
    @media screen and (min-width: 600px) and (max-width: 1024px) {
      grid-template-areas: 'Banner Banner Banner Banner' 'Hero Hero Hero Hero' 'Buttons Buttons TextMeTheApp TextMeTheApp' 'Footer Footer Footer Footer';
      grid-template-rows: 0.25fr 1fr 1fr;
    }
    @media screen and (min-width: 1025px) {
      grid-template-areas: 'Banner Banner Banner Banner' 'Hero Hero Buttons Buttons' 'Hero Hero TextMeTheApp TextMeTheApp' 'Footer Footer Footer Footer';
      grid-template-rows: 0.25fr 1fr 1fr;
    }
  `
  const Banner = styled.div`
    grid-area: Banner;
    margin-top: 70px;
    padding: 2rem;
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    h1 {
      font-size: 2.25rem;
    }
    h2 {
      font-size: 1.25rem;
    }
    p {
      font-size: 1.25rem;
    }
  `
  const Hero = styled.div`
    grid-area: Hero;
    position: relative;
    overflow: hidden;
    .gatsby-image-outer-wrapper,
    .gatsby-image-wrapper {
      position: static !important;
      img {
        object-position: top !important;
      }
    }
    @media screen and (max-width: 599px) {
      height: 100%;
    }
    @media screen and (min-width: 600px) and (max-width: 1024px) {
      height: 100%;
      min-height: 40vh;
      max-height: 40vh;
    }
    @media screen and (min-width: 1025px) {
      height: 70vh;
    }
  `
  const Cover = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
  `
  const Buttons = styled.div`
    grid-area: Buttons;
    padding: 1rem;
    background: ${props => props.theme.colors.tertiary};
  `
  const TextMeTheApp = styled.div`
    grid-area: TextMeTheApp;
    background: ${props => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    div > form {
      input {
        padding: 1rem;
        margin: 0.5rem;
        background: ${props => props.theme.colors.white} !important;
        width: 90%;
        max-width: 330px;
        text-align: center;
        font-size: 1.25rem;
        &:focus {
          outline: none;
        }
        &::placeholder {
          text-align: center;
        }
      }
      input[type='submit'] {
        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors.blue} !important;
        outline: none;
        font-size: 1.25rem;
        font-family: 'FFKievitWebProBold', Helvetica, Verdana, sans-serif;
        appearance: none;
      }
    }
  `
  const TextMeTheAppTitle = styled.h2`
    font-size: inherit;
    font-weight: inherit;
  `
  return (
    <PageTransition>
      <SEO />
      {pages.map(({ node: page }) => (
        <GridContainer key={page.id}>
          <Banner
            dangerouslySetInnerHTML={{
              __html: page.promotion.childMarkdownRemark.html,
            }}
          />
          <Hero>
            <Cover>
              <Img sizes={page.hero.sizes} />
            </Cover>
          </Hero>
          <Buttons>
            <Modules content={page.content} />
          </Buttons>
          <TextMeTheApp>
            <TextMeTheAppTitle>TEXT ME THE APP</TextMeTheAppTitle>
            <div
              dangerouslySetInnerHTML={{
                __html: `        <form onsubmit="sendSMS(this); return false; ">
              <input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" />
              <br/>
              <input type="submit" value="SUBMIT"/>
          </form>`,
              }}
            />
          </TextMeTheApp>
        </GridContainer>
      ))}
    </PageTransition>
  )
}

export const query = graphql`
  query hhr {
    allContentfulPage(filter: { slug: { eq: "hhr" } }) {
      edges {
        node {
          id
          title
          slug
          promotion {
            childMarkdownRemark {
              html
            }
          }
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
              text
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
