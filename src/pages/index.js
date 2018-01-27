import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";

import CodepenIcon from '../img/icons/codepen.svg';
import GithubIcon from '../img/icons/github.svg';
import LinkedinIcon from '../img/icons/linkedin.svg';
import TwitterIcon from '../img/icons/twitter.svg';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;

    return (
      <section className="page is-bullseye">
        <div className="box">
          <h1 className="page-title">Cliff Pyles</h1>
          <p className="page-subtitle">Hello, I build stuff for the web.</p>
          <div className="socials">
            <a href="//codepen.io/cliffpyles">
              <CodepenIcon />
            </a>
            <a href="//github.com/cliffpyles">
              <GithubIcon />
            </a>
            <a href="//linkedin.com/in/cliffpyles">
              <LinkedinIcon />
            </a>
            <a href="//twitter.com/cliffpyles">
              <TwitterIcon />
            </a>
          </div>
        </div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
      </section>
    );
  }
}
