import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Hero, NavBar, AboutMe, Projects, Contact, Footer } from '../components'
import '../themes/style.sass'

class Index extends React.Component {

    hero = React.createRef();
    about = React.createRef();
    portfolio = React.createRef();
    contact = React.createRef();

    constructor(props) {
        super(props);
        this.scrollToContent = this.scrollToContent.bind(this);
    }

    scrollToContent(item) {
        const { current } = { ...item }
        !!current && current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    render() {
        const { data } = this.props
        const { site = {}, config = {} } = { ...data }
        const { siteMetadata: metadata = {} } = { ...site }
        const { title = '' } = { ...metadata }
        const refs = {
            hero: this.hero, portfolio: this.portfolio, about: this.about, contact: this.contact
        }
        return (
        <React.Fragment>
            <Helmet>
                <meta charSet={'utf-8'}/>
                <meta name={'viewport'} content={'width=device-width, initial-scale=1.0, viewport-fit=cover'}></meta>
                <title>{title}</title>
            </Helmet>
            <NavBar refs={refs} scrollToContent={this.scrollToContent} config={config}/>
            <span className={'separator'} ref={this.hero} />
            <Hero scrollToContent={this.scrollToContent.bind(this, this.about)} config={config} />
            <span className={'separator'} ref={this.about} />
            <AboutMe config={config}/>
            <span className={'separator'} ref={this.portfolio} />
            <Projects config={config}/>
            <span className={'separator'} ref={this.contact} />
            <Contact config={config}/>
            <Footer config={config}/>
        </React.Fragment>
        )
    }

}

Index.propTypes = { data: PropTypes.object.isRequired };

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    config: dataJson {
      hero {
        subtitle
        tags
        title
      }
      about {
        title
        contents
      }
      blog
      footer
      socials {
        github
        twitter
        linkedin
        email
      }
      projects {
        featured {
          title
          subtitle
          items {
            title
            description
            type
            image
            tags
          }
        }
        others {
          title
          items {
            title
            description
            type
            link
            tags
          }
        }
      }
      contact {
        title
        subtitle
        text
      }
    }
  }
`

export default Index;