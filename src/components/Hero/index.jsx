import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import './styles.css'

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "hero-background.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={(data) => {
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag={'div'}
            className={'hero'}
            fluid={imageData}
            backgroundColor={'#fff'}
            style={{
              backgroundPositionY: '100%',
              backgroundPositionX: '110%',
              backgroundSize: 'contain',
            }}
          >
            <div className={'container'}>
              <h1>lex martinez.</h1>
              <h2>[Node JS | React JS] Developer</h2>
              <hr />
              <p>
                (n.) <b>1. </b>javascript developer based in Medellín, CO, with
                9+ years of experience building web/mobile apps. <b>2. </b>
                Currently working as freelance building awesome stuff.
              </p>
            </div>
          </BackgroundImage>
        )
      }}
    />
  )
}
