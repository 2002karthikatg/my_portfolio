// rfce -short cut for the structure
import logo from "../assets/logo1.png";
import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { RxGithubLogo } from "react-icons/rx";
import { AiFillStar } from 'react-icons/ai';
import { CgGitFork } from 'react-icons/cg';



function NavBar() {

  //1. define variable
  const [expand, setExpanded] = useState(false);
  const [navColor, setNavColor] = useState(false);

const scrollHandle=()=>{
  if (window.scrollY >= 20) {
    setNavColor(true);
    } else {
      setNavColor(false);
      }
}
window.addEventListener('scroll', scrollHandle);


  return (
    <div>
      <Navbar expanded={expand} fixed='top' expand='md' className={navColor ? 'sticky' : 'navbar'}>

        <Container>
          {/* Brand  */}
          <Navbar.Brand href='/' className='d-flex'>
            <img src={logo} alt='brand' className='img-fluid logo' height={20} width={60} ></img>
          </Navbar.Brand>
          {/* Toggle icon  */}

          <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => { setExpanded(expand ? false : 'expanded') }}>

            <span></span>
            <span></span>
            <span></span>

          </Navbar.Toggle>

          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Item>
                <Nav.Link href='#' to='/' className='nav-link' onClick={() => { setExpanded(false) }}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href='#' to='/about' className='nav-link' onClick={() => { setExpanded(false) }}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href='#' to='/project' className='nav-link' onClick={() => { setExpanded(false) }}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href='#' to='/resume' className='nav-link' onClick={() => { setExpanded(false) }}>
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href='https://github.com/dashboard' target='_blank' className='nav-link' onClick={() => { setExpanded(false) }}>
                  <RxGithubLogo style={{ marginBottom: "2px" }} /> GitHub</Nav.Link>
              </Nav.Item>


              <Nav.Item className="fork-btn">
                <Button href="https://github.com/dashboard" target="_blank" className="fork-btn-inner">
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>


            </Nav>
          </Navbar.Collapse>


        </Container>




      </Navbar>

    </div>
  )
}

export default NavBar;