
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi everyone! I’m <span className="purple">Karthiyayini</span>{" "}
                        from <span className="purple">Madurai, TamilNau</span>.
                        <br />
                        I’m currently working as a{" "}
                        <span className="purple">MERN stack Developer</span> at{" "}
                        <span className="purple">Adinn Digital</span>.
                        <br />Holding a B.Tech {" "}
                        <span className="purple">in Information Technology</span> from{" "}
                        <span className="purple">KLN College of Engineering.</span>.
                        My professional work is centered on end-to-end development, from conceptualizing user interfaces with dynamic animations to engineering robust backend systems and admin panels for complex platforms like E-commerce sites.

                        
                        <br />
                        <br />
                        Core Competencies:
                    </p>

                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Full-Stack Web Development (MERN Stack) ⚙️
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Single Page Applications (SPA) & Responsive UI 🎨
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Backend API Development & Integration 🔗
🌍
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> E-commerce Systems & Admin Panel Architecture 🛒

                            🌍
                        </li> 
                        <li className="about-activity">
                            <ImPointRight /> Database Design & Management 💾
                            🌍
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Karthika</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
