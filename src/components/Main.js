import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hi, my name is Alicia Santiago.
          </p>
          <p>
            I am a full stack junior developer with a passion for learning and creative solutions.
            I have experience building applications with Ruby on Rails + React + JavaScript, and I'm currently exploring GatsbyJS + GraphQL.
            My background is in higher education instruction and counseling, and those skills have undoubtedly shaped my approach to problem solving.
            The best solutions stem from curious thinkers, but curiosity is a precious resource that needs to be <em>intentionally</em> cultivated.
            Working as a developer challenges me to stay curious and feeds my need to <b>learn all the things</b>&mdash;what could be better than that?
          </p>
          <p>
            Please check out my work and reach out if you'd like to collaborate (or hire me).
            I'm always looking to connect with like-minded devs!
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <ul>
            <ul className="icons">
            <li>
              <a href="https://github.com/Minajeanne/trivia_app_backend"
                target="_blank" rel="noopener noreferrer"
                className="icon fa-github">
              </a>
            </li>
          Trivia App
            <br>
              <ul>
                A general knowledge trivia game developed with a React front end and a Rails API back end, using a MVC
                  structure and serializers for front-end JSON data.
                  Applied Redux Thunk middleware to maintain global state and store JSON responses.
                <br>
              </ul>
            <li>
              <a href="https://github.com/Minajeanne/i_run"
                target="_blank" rel="noopener noreferrer"
                className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          I_Run
            <br>
              <ul>
                A SPA that allows user to keep track of personal records, past performances, and past/upcoming races.
                  Built with a JavaScript, HTML and CSS front end and a Rails API back end.
                  User authentication established using OmniAuth via Github or directly within the application using
                  the Devise gem.
                <br>
              </ul>
            <li>
              <a href="https://github.com/Minajeanne/munch"
                target="_blank" rel="noopener noreferrer"
                className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          MUNCH
            <br>
              <ul>
                A review site for users to rate and/or recommend local restaurants.
                  A CMS application created using Sinatra with a CRUD, MVC structure and ActiveRecord.
                  Basic user authentication established using built-in Rails method and BCrypt gem.
                <br>
              </ul>
            <a href="https://gpainc.org/" target="_blank" rel="noopener noreferrer">
          The Gifted & Purposed Alliance, Inc.
            </a>
              <br>
                <ul>
                  Website for GPA, Inc., a nonprofit organization for young people gifted in the arts.
                </ul>
            </ul>
          </ul>
          {close}
        </article>

        <article
          id="blog"
          className={`${this.props.article === 'blog' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Blog</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Published in <a href="https://medium.com/swlh" target="_blank" rel="noopener noreferrer"> The Startup</a>:
              <ul>
                <a href="https://medium.com/swlh/https-medium-com-melee-santiago-using-devise-gem-to-handle-authentication-in-rails-app-538bbd231dde"
                  target="_blank" rel="noopener noreferrer">
                    Using the Devise Gem to Handle Authentication in a Rails App
                </a>
              </ul>
            Published in <a href="https://medium.com/" target="_blank" rel="noopener noreferrer"> Medium</a>:
              <ul>
                <a href="https://medium.com/@melee.santiago/a-react-redux-trivia-app-81a01907a27b"
                  target="_blank" rel="noopener noreferrer">
                  A React-Redux Trivia App
                </a>
              <br>
                <a href="https://medium.com/@melee.santiago/updating-a-rails-app-with-javascript-b27a68694d41"
                  target="_blank" rel="noopener noreferrer">
                  Updating a Rails App with JavaScript
                </a>
              <br>
                <a href="https://medium.com/@melee.santiago/creating-a-crud-mvc-app-using-sinatra-my-three-biggest-takeaways-d85213055637"
                  target="_blank" rel="noopener noreferrer">
                  Creating a CRUD, MVC App Using Sinatra: My Three Biggest Takeaways
                </a>
              <br>
                <a href="https://medium.com/@melee.santiago/brewing-my-first-ruby-cli-gem-b0299e7968a1"
                  target="_blank" rel="noopener noreferrer">
                  Brewing My First Ruby CLI Gem
                </a>
              </ul>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" className="special" />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://medium.com/@melee.santiago" className="icon fa-medium" target="_blank" rel="noopener noreferrer">
                <span className="label">Medium</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alicialsantiago" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/alicialsantiago" className="icon fa-twitter" target="_blank" rel="noopener noreferrer"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/alicialsantiago/?hl=en" className="icon fa-instagram" target="_blank" rel="noopener noreferrer">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Minajeanne" target="_blank" rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
