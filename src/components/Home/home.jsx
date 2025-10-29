import React,{useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../particle.jsx';
import Karthi from '../../assets/karthi_photo.jpg';
import Type from "./Type";
import Home2 from './home2.jsx';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

function Home() {
  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    // <div>
      <section>
        <Container fluid className='home-section' id='home'
        
        //  style={{ background:'../../assets/background.png'}}
        
        >
          {/* <Particle /> */}
          <Container className='home-content'>
            <Row>
              {/* Column-1  */}
            <Col md={7} className='home-header' data-aos="zoom-in">
                <h1 className='heading' style={{ paddingBottom: '15px' }}>Hello There!{" "}
                  <span className='wave'>👋🏻</span>
                </h1>
                <h1 className='heading-name'>I'm <strong className='main-name'>KARTHIYAYINI T G</strong></h1>
                <div style={{ padding: '50px', textAlign: 'left' }}>
                 <Type />
                </div>
              </Col>
              {/* Column-2  */}
              <Col md={5} style={{ paddingBottom: '20px' }} data-aos="zoom-in">
                <img src={Karthi} className='img-fluid' style={{ maxHeight: '350px', width:'350px', borderRadius:'50%' }}></img>
              </Col>
            </Row>
          </Container>
<Home2/>

        </Container>
        {/* 2nd home section  */}
{/* <Home2/> */}


      </section>


    // </div>
  )
}

export default Home;