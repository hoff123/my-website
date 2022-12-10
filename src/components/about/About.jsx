import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {BsCodeSquare} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="An image of ME" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>A lot of work</small>
            </article>
            <article className="about__card">
              <BsCodeSquare className="about__icon" />
              <h5>Projects</h5>
              <small>A lot of work</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum libero ipsa, voluptate molestiae illum ullam vitae optio incidunt soluta nulla consequuntur similique! Sit itaque, veniam vel animi facere cum blanditiis!
          </p>

          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>

    </section>
  )
}

export default About