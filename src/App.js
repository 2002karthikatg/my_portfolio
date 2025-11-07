// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;












import React, { useState, useEffect } from 'react'
// import SearchFilter from './Search_filter'
// import Search from './search';
// import Preloader from './components/pre';
import './style.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Preloader from './components/pre';
//Splash cursor
import SplashCursor from './components/SplashCursor.jsx';
import NavBar from './components/navbar';
import ScrollToTop from './components/scrollToTop';
import Home from './components/Home/home.jsx';
import About from "./components/About/About";
import Projects from './components/Projects/Projects.jsx';
import Resume from './components/Resume/ResumeNew.jsx';
// import BookASite from './SIDEBAR.jsx';
// import SpotsFilter from './sideFilter.jsx';
import Footer from './components/footer.jsx';


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  const otp = Math.floor(Math.random() * 900000) + 100000;
  console.log(otp);
  const otp1 = Math.random().toString().slice(2, 8);
  console.log(otp1); // Always 6 digits

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* <SplashCursor /> */}
        <NavBar />
        <ScrollToTop />
        {/* <Home/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />



        </Routes>
        <Footer />
      </div>
    </Router>

  )
}
export default App;
