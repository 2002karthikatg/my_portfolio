import React,{useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
// import myImg from "../../assets/home-konwnAvatar.png";
import Karthi from '../../assets/karthi_photo.jpg';

// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import Particle from '../particle.jsx';

import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

function Home2() {
  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
  

      <Container fluid className="home-about-section" id="about">
      {/* <Particle /> */}

        <Container>
          <Row>
          <Col md={8} className="home-about-description" data-aos="fade-right">
            <div>

              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
           A results-oriented and passionate MERN Stack Developer with one year of professional experience specializing in the design and implementation of full-stack web applications.
            {/* I think… 🤷‍♂️ */}
                <br />
                <br />I possess strong proficiency in the MongoDB, Express.js, React.js, and Node.js 
                <i>
                  <b className="purple">MongoDB, Express.js, React.js, and Node.js </b>
                </i>
                ecosystem, complemented by expertise in modern frontend frameworks
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Websites  with admin panel and make it attractive animations </b> and
                  also in areas related to{" "}
                  {/* <b className="purple">
                    Blockchain.
                  </b> */}
                </i>
                <br />
                <br />
                My primary focus is on developing scalable, efficient, and user-centric digital products. I am driven by the challenge of solving complex problems and am dedicated to writing clean, maintainable code to build technologies that deliver tangible value using <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js</b>
                </i>
              </p>
            </div>

            </Col>
          <Col md={4} className="myAvtar" data-aos="fade-left">
              {/* <Tilt> */}
            <img src={Karthi} className="img-fluid" alt="avatar" style={{ maxHeight: '350px', width: '350px', borderRadius: '50%' }} />
              {/* </Tilt> */}
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                  href="https://github.com/Karthiyayini13"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                  href="https://github.com/Karthiyayini13"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                  href="https://www.linkedin.com/in/karthi-ganesh-08a672207/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                  href="https://www.instagram.com/ihtrak_5143/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    
    
  )
}

export default Home2;