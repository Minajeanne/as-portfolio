import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Alicia Santiago</h1>
        <p>
          Full Stack Developer
          <br />
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('blog')
            }}
          >
            Blog
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
//   <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px"
  //  href="https://unsplash.com/@johnwestrock?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
  //   target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Dave">
  //   <span style="display:inline-block;padding:2px 3px">
  //     <svg xmlns="http://www.w3.org/2000/svg"
  //       style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
  //       viewBox="0 0 32 32"><title>unsplash-logo</title>
  //       <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
  //     </svg>
  //   </span>
  // <span style="display:inline-block;padding:2px 3px">Dave</span></a>
