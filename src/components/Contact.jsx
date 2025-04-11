import { SiLeetcode } from "react-icons/si";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import heroImage from '../assets/hero.png'; 
import Vector from '../assets/Vector.svg';

function Contact() {
  return (
    <div className="container contact-container">
      <div className="contact-info">
      <h2 className="contact-h2">Contact</h2>
      <p className='contact-para'>I'm currently looking to join a cross-functional team that values improving people's lives
      through accessible design. or have a project in mind? Let's connect.</p>
      <p className="email">omkarhadole38@gmail.com</p>
      <div className="socials">
        <a href="https://www.linkedin.com/in/omkar-hadole/"><span><FaLinkedin /></span></a>
        <a href="https://github.com/omkar-hadole"><span><IoLogoGithub /></span></a>
        <a href="mailto:omkarhadole38@gmail.com"><span><TbMailFilled /></span></a>
        <a href="https://leetcode.com/u/omkar-hadole/"><span><SiLeetcode /></span></a>
      </div>
      </div>
      <div className='container'>
        <div className="contact-form">
          <div className="form-section">
            <div>
              <h4>Get in touch</h4>
              <p>Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
            </div>
            <form className="from">
              <div>
              <input type="text" placeholder='First Name'/><input type="text" placeholder='Last Name'/>
              </div>
              <input type="text" placeholder='Email'/>
              <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
              <button type="submit">Send Message <span><img src={Vector} alt="" /></span></button>
            </form>
          </div>
          <div className="contact-img">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact