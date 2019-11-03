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
                <title>{title}</title>
            </Helmet>
            <NavBar refs={refs} scrollToContent={this.scrollToContent} config={config}/>
            <span className={'separator'} ref={this.hero} />
            <Hero scrollToContent={this.scrollToContent.bind(this, this.about)} config={config} />
            <span className={'separator'} ref={this.about} />
            <AboutMe config={config}/>
            <span className={'separator'} ref={this.portfolio} />
            <Projects/>
            <span className={'separator'} ref={this.contact} />
            <Contact/>
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
    }
  }
`

export default Index;