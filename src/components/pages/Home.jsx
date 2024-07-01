import '../styles/Home.css';
import Logo from "../assets/logo.png";
import Github from "../assets/github.png";
import React from 'react';
import { Link } from 'react-scroll';
// import { saveAs } from 'file-saver';

const downloadPdf = () => {
    const pdfUrl = 'https://drive.google.com/file/d/16Q5W-XwsxAyyQKlZXDhbzlkolAs7Emh5/view?usp=sharing';
    // saveAs(pdfUrl, 'Eleazar Missael.pdf');
    window.open(pdfUrl, "_blank");
};



const Home = () => {
    return (
        <section id='home'>
            <div className="section__pic-container">
                <img src={Logo} alt='logo' />
            </div>
            <div className="section__text">
                <p className='section__text__p1'>Hello I'm</p>
                <h1 className='title'>Eleazar Missael</h1>
                <p className="section__text__p2">FrontEnd Developer</p>
                <div className='btn-container'>
                    <button className='btn btn-color-2' onClick={downloadPdf}>
                        Download CV
                    </button>
                    <Link
                        id='as'
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <button className='btn btn-color-1'>
                            Contact Me
                        </button>
                    </Link>
                </div>
                <div id="socials-container">
                    <a target='_blank' rel='noreferrer' href="https://github.com/KluttsX">
                        <img className='icon' src={Github} alt="Github" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
